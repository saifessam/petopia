import { Add, Close } from "@mui/icons-material";
import { Button, Container, Dialog, FormGroup, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

type Props = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function DialogComponent({ open, setOpen }: Props) {
	return (
		<Dialog fullScreen open={open} onClose={() => setOpen(false)} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", bgcolor: "background.default" }}>
			<Container sx={{ minHeight: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 }}>
				<Paper variant="outlined" sx={{ width: 0.5, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", gap: 2, p: 2 }} >
					<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
						<Typography variant='h6' fontWeight={900} color={"text.primary"}>Create New Product</Typography>
						<IconButton color='primary' onClick={() => setOpen(false)}><Close /></IconButton>
					</Stack>
					<FormGroup>
						<InputLabel htmlFor="title">Product Title</InputLabel>
						<OutlinedInput id="title" label="Product Title" size="small" />
					</FormGroup>
					<FormGroup>
						<InputLabel htmlFor="description">Product Description</InputLabel>
						<ReactQuill id="description" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch" }} />
					</FormGroup>
					<FormGroup>
						<InputLabel htmlFor="category">Product Category</InputLabel>
						<Select labelId="category" label="Product Category" size="small">
							<MenuItem value={"Category 1"}>Category 1</MenuItem>
							<MenuItem value={"Category 2"}>Category 2</MenuItem>
							<MenuItem value={"Category 3"}>Category 3</MenuItem>
						</Select>
					</FormGroup>
				</Paper>
				<Paper variant="outlined" sx={{ width: 0.5, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", gap: 2, p: 2 }} >
					<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
						<Typography variant='h6' fontWeight={900} color={"text.primary"}>Variants</Typography>
						<Button variant="contained" color='primary' startIcon={<Add />}>Variant</Button>
					</Stack>
				</Paper>
				<Button variant="contained" color='primary' sx={{ mt: 2 }}>Create Product</Button>
			</Container>
		</Dialog>
	);
}
