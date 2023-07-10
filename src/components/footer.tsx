import { ArrowForward, Phone } from '@mui/icons-material';
import { Box, Button, Divider, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';
import { ReactComponent as PetsBonzSVG } from '../assets/svgs/illustrations/petsbonz.svg';

export default function Footer() {
	const usefulLinks = ["Home", "FAQ", "About", "Gallery", "Services", "Delivery", "Shop", "Sales"];

	return (
		<Box component={"footer"} sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4, bgcolor: "#F8F8F8" }}>
			<Grid container spacing={6} sx={{ px: 4 }} direction={{ xs: "column", md: "row" }}>
				<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<PetsBonzSVG />
					<Typography variant='body2' color={"text.primary"}>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...</Typography>
					<Stack direction={"row"} spacing={1} alignItems={"center"}>
						<Phone fontSize='large' color={'primary'} />
						<Stack>
							<Typography variant='subtitle1' fontWeight={900} color={"text.primary"}>(913) 756-3126</Typography>
							<Typography variant='caption' color={"text.secondary"}>Got Questions? Call us 24/7</Typography>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography variant='h6' fontWeight={900} color={"primary.main"}>Working Hours</Typography>
					<Stack spacing={1} sx={{ p: 1 }}>
						<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
							<Typography variant='caption' color={"text.secondary"}>Mon - Fri:</Typography>
							<Typography variant='subtitle1' fontWeight={900} color={"text.primary"}>7am – 6pm</Typography>
						</Stack>
						<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
							<Typography variant='caption' color={"text.secondary"}>Saturday:</Typography>
							<Typography variant='subtitle1' fontWeight={900} color={"text.primary"}>9am – 4pm</Typography>
						</Stack>
						<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
							<Typography variant='caption' color={"text.secondary"}>Sunday:</Typography>
							<Typography variant='subtitle1' fontWeight={900} color={"text.primary"}>Closed</Typography>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography variant='h6' fontWeight={900} color={"primary.main"}>Useful Links</Typography>
					<Grid container spacing={1}>
						{usefulLinks.map((link) => (
							<Grid item xs={6} key={link}>
								<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
									<Typography variant='body1' color={"primary.main"}>●</Typography>
									<Typography variant='body1' color={"text.secondary"}>{link}</Typography>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={3} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography variant='h6' fontWeight={900} color={"primary.main"}>NewsLetter</Typography>
					<Stack alignItems={"center"} spacing={2}>
						<Typography variant='body1' color={"text.primary"}>Be first in the queue! Get our latest news straight to your inbox.</Typography>
						<Stack direction={"row"} sx={{ gap: 2 }}>
							<TextField label="Email" variant="outlined" size="small" color='primary' />
							<Button variant='contained' color="primary"><ArrowForward /></Button>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			<Divider variant="middle" sx={{ width: 0.8, m: 4 }} />
			<Typography variant='caption' color={"text.secondary"}>NOOT ©  All rights reserved Copyrights 2023</Typography>
		</Box >
	);
}
