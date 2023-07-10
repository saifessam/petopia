import { Add, Close, CloudUpload } from "@mui/icons-material";
import { Button, Dialog, FormGroup, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import Dropzone from "react-dropzone";

type Props = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ModalComponent({ open, setOpen }: Props) {
	return (
		<Dialog open={open} onClose={() => setOpen(false)}>
			<Paper variant="outlined" sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "stretch", gap: 2, p: 2 }} >
				<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
					<Typography variant='h6' fontWeight={900} color={"text.primary"}>Add Variant</Typography>
					<IconButton color='primary' onClick={() => setOpen(false)}><Close /></IconButton>
				</Stack>
				<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
					{({ getRootProps, getInputProps }) => (
						<Paper variant="outlined" sx={{ bgcolor: "#F8F8F8", borderStyle: "dashed" }}>
							<Stack sx={{ p: 2, gap: 2 }}>
								<Stack alignItems={"center"} {...getRootProps()}>
									<input {...getInputProps()} />
									<CloudUpload color="primary" fontSize="large" />
									<Typography variant="body1" color={"text.priamry"}>Drag and drop some files here, or click to select files</Typography>
								</Stack>
							</Stack>
						</Paper>
					)}
				</Dropzone>
				<Stack direction={"row"} sx={{ gap: 2 }}>
					<Select labelId="type" size="small" fullWidth>
						<MenuItem value={"Type 1"}>Type 1</MenuItem>
						<MenuItem value={"Type 2"}>Type 2</MenuItem>
						<MenuItem value={"Type 3"}>Type 3</MenuItem>
					</Select>
					<OutlinedInput id="price" size="small" fullWidth />
					<Button variant="contained" color='primary'><Add /></Button>
				</Stack>
				<FormGroup>
					<InputLabel htmlFor="price">Price</InputLabel>
					<OutlinedInput id="price" size="small" type="number" startAdornment={<InputAdornment position="start">EGP</InputAdornment>} />
				</FormGroup>
				<FormGroup>
					<InputLabel htmlFor="discount">Discount</InputLabel>
					<OutlinedInput id="discount" size="small" type="number" startAdornment={<InputAdornment position="start">%</InputAdornment>} />
				</FormGroup>
				<FormGroup>
					<InputLabel htmlFor="quantity">Quantity</InputLabel>
					<OutlinedInput id="quantity" size="small" type="number" />
				</FormGroup>
				<Button variant="contained" color='primary' sx={{ mt: 2, alignSelf: "center" }} onClick={() => setOpen(false)}>Create Variant</Button>
			</Paper>
		</Dialog>
	);
}
