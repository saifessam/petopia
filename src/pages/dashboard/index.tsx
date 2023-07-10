import { Add, Search } from '@mui/icons-material';
import { Box, Button, Container, Dialog, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import type { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import getProducts from '../../services/get-products';
import DialogComponent from './components/dialog';
import Header from './components/header';

export default function DashboardPage() {
	const [openDialog, setOpenDialog] = useState(false);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', type: "string", width: 100 },
		{ field: 'name', headerName: 'Name', type: "string", width: 150, editable: true, valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}` },
		{ field: 'description', headerName: 'Description', type: "string", width: 250, editable: true, valueGetter: (params: GridValueGetterParams) => `${params.row.description || ''}` },
		{ field: 'date', headerName: 'Date', type: "string", width: 250, valueGetter: (params: GridValueGetterParams) => params.row.date && `${params.row.date.getDate()} / ${params.row.date.getMonth() + 1} / ${params.row.date.getFullYear()}` },
	];

	const rows = [
		{ id: crypto.randomUUID(), name: "Prodcut 1", description: "Product 1 description", date: new Date },
		{ id: crypto.randomUUID(), name: "Prodcut 2", description: "Product 2 description", date: new Date },
		{ id: crypto.randomUUID(), name: "Prodcut 3", description: "Product 3 description", date: new Date },
		{ id: crypto.randomUUID(), name: "Prodcut 4", description: "Product 4 description", date: new Date },
		{ id: crypto.randomUUID(), name: "Prodcut 5", description: "Product 5 description", date: new Date },
		{ id: crypto.randomUUID(), name: "Prodcut 6", description: "Product 6 description", date: new Date }
	];

	const query = useQuery({ queryKey: ['todos'], queryFn: getProducts });

	useEffect(() => {
		if (query.isLoading) return console.info("Loading");
		if (query.isError) return console.error("Error ===>", query.error);
		if (query.isSuccess) return console.log("Data ===>", query.data);
	}, [query]);

	return (
		<Box sx={{ bgcolor: "background.default" }}>
			<Header />
			<Container component={"main"}>
				<Stack direction={{ xs: "column", sm: "row" }} justifyContent={{ sm: "space-between" }} alignItems={{ sm: "center" }}>
					<Typography variant='h6' fontWeight={700} color={"text.primary"}>Products</Typography>
					<FormControl variant="outlined">
						<InputLabel htmlFor="search">Search</InputLabel>
						<OutlinedInput
							id="search"
							label="Search"
							size='small'
							endAdornment={
								<InputAdornment position="end">
									<IconButton edge="end">
										<Search />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Stack>
				<Button variant='outlined' color='primary' startIcon={<Add />} onClick={() => setOpenDialog(true)} sx={{ width: { xs: 1, sm: "auto" }, my: 2 }}>Product</Button>
				<DataGrid rows={rows} columns={columns} checkboxSelection />
				<DialogComponent open={openDialog} setOpen={setOpenDialog} />
			</Container>
		</Box>
	);
}
