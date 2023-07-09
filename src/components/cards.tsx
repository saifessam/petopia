import { ArrowForwardOutlined } from '@mui/icons-material';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';

export default function Cards() {
	const cards = [
		{ title: "Сheck Out Our Specials", subTItle: "Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis ", image: "cars-dog-1.png" },
		{ title: "Luxury Fashion Collection", image: "cars-dog-2.png" },
		{ title: "Shop What’s Trending", image: "cars-dog-3.png" }
	];

	return (
		<Container sx={{ width: 1, display: "flex", justifyContent: "center", p: 4 }}>
			<Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent={"center"} >
				<Paper sx={{ width: { xs: 1, md: 1 / 2 }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { xs: "center", md: "flex-end" }, bgcolor: "#FCDCB5", p: 2 }}>
					<Button variant='contained' color='primary'>Up to 40% Off</Button>
					<Stack direction={{ xs: "column-reverse", md: "row" }} justifyContent={"space-between"} alignItems={"center"}>
						<Stack alignItems={{ xs: "center", md: "flex-start" }} sx={{ p: { xs: 1, md: 2 } }} spacing={1}>
							<Typography variant='h4' fontWeight={900} color={"text.primary"} sx={{ maxWidth: { md: "11ch" } }} textAlign={{ xs: "center", md: "start" }}>Сheck Out Our Specials</Typography>
							<Typography variant="body2" color={"text.primary"} sx={{ maxWidth: { md: "35ch" } }} textAlign={{ xs: "center", md: "start" }}>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis</Typography>
							<Button endIcon={<ArrowForwardOutlined />} color='primary'>Shop Now</Button>
						</Stack>
						<Box component="img" src={require("../assets/images/cards-dog-1.png")} alt='Dog' sx={{ width: { xs: 0.8, sm: 0.5 }, height: "auto" }} loading='lazy' />
					</Stack>
				</Paper>
				<Stack spacing={2} justifyContent={"space-between"}>
					<Paper sx={{ position: { md: "relative" }, bgcolor: "secondary.main" }}>
						<Stack direction={{ xs: "column-reverse", md: "row" }} justifyContent={"space-between"} alignItems={"center"}>
							<Stack sx={{ p: 2, pr: { xs: 0, md: 15 } }} alignItems={"stretch"}>
								<Typography variant='subtitle1' fontWeight={900} color={"text.primary"} sx={{ maxWidth: { md: "15ch" } }}>Luxury Fashion Collection</Typography>
								<Button endIcon={<ArrowForwardOutlined />} color='primary'>Shop Now</Button>
							</Stack>
							<Box component="img" src={require("../assets/images/cards-dog-2.png")} alt='Dog' sx={{ position: { md: "absolute" }, top: { md: "50%" }, left: { md: "125%" }, transform: { md: "translate(-125%, -50%)" }, aspectRatio: { md: "3/4" }, height: { md: "120%" }, mt: { xs: 2, md: 0 }, borderRadius: 4, objectFit: "cover" }} loading='lazy' />
						</Stack>
					</Paper>
					<Paper sx={{ position: { md: "relative" }, bgcolor: "secondary.main" }}>
						<Stack direction={{ xs: "column-reverse", md: "row" }} justifyContent={"space-between"} alignItems={"center"}>
							<Stack sx={{ p: 2, pr: { xs: 0, md: 15 } }} alignItems={"stretch"}>
								<Typography variant='subtitle1' fontWeight={900} color={"text.primary"} sx={{ maxWidth: { md: "15ch" } }}>Shop What’s Trending</Typography>
								<Button endIcon={<ArrowForwardOutlined />} color='primary'>Shop Now</Button>
							</Stack>
							<Box component="img" src={require("../assets/images/cards-dog-3.png")} alt='Dog' sx={{ position: { md: "absolute" }, top: { md: "50%" }, left: { md: "125%" }, transform: { md: "translate(-125%, -50%)" }, aspectRatio: { md: "3/4" }, height: { md: "120%" }, mt: { xs: 2, md: 0 }, borderRadius: 4, objectFit: "cover" }} loading='lazy' />
						</Stack>
					</Paper>
				</Stack>
			</Stack>
		</Container>
	);
}
