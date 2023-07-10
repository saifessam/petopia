import { Add, Close } from "@mui/icons-material";
import { Button, Container, Dialog, FormGroup, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ModalComponent from "./modal";

type Props = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function DialogComponent({ open, setOpen }: Props) {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Dialog fullScreen open={open} onClose={() => setOpen(false)} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", bgcolor: "background.default" }}>
			<Container sx={{ minHeight: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2, my: { xs: 2, sm: 0 } }}>
				<Paper variant="outlined" sx={{ width: { xs: 1, sm: 0.7, md: 0.5 }, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", gap: 2, p: 2 }} >
					<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
						<Typography variant='h6' fontWeight={900} color={"text.primary"}>Create New Product</Typography>
						<IconButton color='primary' onClick={() => setOpen(false)}><Close /></IconButton>
					</Stack>
					<FormGroup>
						<InputLabel htmlFor="title">Product Title</InputLabel>
						<OutlinedInput id="title" size="small" />
					</FormGroup>
					<FormGroup>
						<InputLabel htmlFor="description">Product Description</InputLabel>
						<ReactQuill id="description" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch" }} />
					</FormGroup>
					<FormGroup>
						<InputLabel htmlFor="category">Product Category</InputLabel>
						<Select labelId="category" size="small">
							<MenuItem value={"Category 1"}>Category 1</MenuItem>
							<MenuItem value={"Category 2"}>Category 2</MenuItem>
							<MenuItem value={"Category 3"}>Category 3</MenuItem>
						</Select>
					</FormGroup>
				</Paper>
				<Paper variant="outlined" sx={{ width: { xs: 1, sm: 0.7, md: 0.5 }, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", gap: 2, p: 2 }} >
					<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
						<Typography variant='h6' fontWeight={900} color={"text.primary"}>Variants</Typography>
						<Button variant="contained" color='primary' startIcon={<Add />} onClick={() => setOpenModal(true)}>Variant</Button>
					</Stack>
				</Paper>
				<Button variant="contained" color='primary' sx={{ mt: 2 }} onClick={() => setOpen(false)}>Create Product</Button>
			</Container>
			<ModalComponent open={openModal} setOpen={setOpenModal} />
		</Dialog >
	);
}
