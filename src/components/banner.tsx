import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BannerBackground from '../assets/svgs/illustrations/banner.svg';
import { ReactComponent as BagSVG } from '../assets/svgs/illustrations/bag.svg';
import { ReactComponent as FoodSVG } from '../assets/svgs/illustrations/food.svg';
import { ReactComponent as MedalSVG } from '../assets/svgs/illustrations/medal.svg';
import { ReactComponent as PetsSVG } from '../assets/svgs/illustrations/pets.svg';

export default function Banner() {
	const entries = [
		{ image: <PetsSVG />, title: "120+", subTitle: "Satisfied Clients" },
		{ image: <MedalSVG />, title: "20+", subTitle: "Years Experience" },
		{ image: <FoodSVG />, title: "70+", subTitle: "Brands Available" },
		{ image: <BagSVG />, title: "200+", subTitle: "Products for Pets" },
	];

	return (
		<Container sx={{ my: 4 }}>
			<Box sx={{ width: 1, p: { xs: 2, md: 8 }, borderRadius: 2, background: `url(${BannerBackground}) no-repeat`, backgroundPosition: { xs: "initial", sm: "center" }, backgroundSize: "cover", overflow: "hidden" }}>
				<Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
					{entries.map((entry, index) => (
						<Grid item xs={6} md={3} key={index}>
							<Stack direction={"row"} alignItems={"center"} spacing={2}>
								{entry.image}
								<Stack>
									<Typography variant="h5" fontWeight={700} color={"background.default"}>{entry.title}</Typography>
									<Typography variant="subtitle2" color={"background.default"}>{entry.subTitle}</Typography>
								</Stack>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
