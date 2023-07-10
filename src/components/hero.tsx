import { Stack, Grid, Box, Typography, Container } from '@mui/material';
import { ReactComponent as ShippingFastIcon } from '../assets/svgs/icons/shipping-fast.svg';
import { ReactComponent as DiscountIcon } from '../assets/svgs/icons/discount.svg';
import { ReactComponent as SupportIcon } from '../assets/svgs/icons/support.svg';
import { ReactComponent as GuaranteeIcon } from '../assets/svgs/icons/guarantee.svg';
import HeroDog from '../assets/images/hero-dog.png';

export default function Hero() {
	const benefits = [
		{ icon: <ShippingFastIcon />, title: "Trust & Safety", subTitle: "Velit euismod pellentes" },
		{ icon: <DiscountIcon />, title: "Discounts", subTitle: "Bibendum ut tristique " },
		{ icon: <SupportIcon />, title: "Support", subTitle: "Egestas quis ipsum velit " },
		{ icon: <GuaranteeIcon />, title: "Guarantee", subTitle: "Convallis tellus id interdum " },
	];

	return (
		<Stack alignItems={'center'} sx={{ position: "relative", height: { xs: "auto", md: "100dvh" }, overflowX: "hidden" }}>
			<Box component="img" src={require("../assets/svgs/illustrations/hero.svg").default} alt="Hero background" sx={{ position: "absolute", top: 0, right: 0, transform: { xs: "translate(10%, -20%)", md: "translateY(-10%)" }, width: { xs: "80dvh", md: "60dvw" }, height: "100%", zIndex: 0 }} />
			<Container sx={{ pt: 8, zIndex: 1 }}>
				<Stack direction={{ xs: "column-reverse", md: "row" }} alignItems={{ xs: "center" }} sx={{ py: { md: 4 } }}>
					<Stack direction={"column"} sx={{ pt: { xs: 12, md: 4 } }}>
						<Stack direction={"column"} spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
							<Typography variant='caption' fontWeight={"800"} color={"#9c5bf5"} textAlign={{ xs: "center", md: "start" }}>WE CARE FOR YOUR PETS</Typography>
							<Typography variant='h3' fontWeight={"800"} sx={{ maxWidth: "21ch" }} textAlign={{ xs: "center", md: "start" }}>We Help You Care for Animals with Nutrition</Typography>
							<Typography variant='body2' fontFamily={"Lato"} color={"#1C103B"} sx={{ maxWidth: "57ch" }} textAlign={{ xs: "center", md: "start" }}>All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</Typography>
						</Stack>
						<Grid container spacing={2} sx={{ marginTop: "1rem" }} direction={{ xs: "column", sm: "row" }}>
							{benefits.map((benefit, index) => (
								<Grid item xs={12} sm={6} key={index}>
									<Stack direction={"row"} alignItems={'center'} spacing={1}>
										<Box sx={{ width: "48px", height: "48px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FBF9FF", border: "thin solid #EBE5F7", borderRadius: "8px" }}>{benefit.icon}</Box>
										<Stack>
											<Typography variant='subtitle1'>{benefit.title}</Typography>
											<Typography variant='subtitle2'>{benefit.subTitle}</Typography>
										</Stack>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Stack>
					<Box component="img" src={HeroDog} alt='Dog' sx={{ width: { xs: 0.8, sm: 0.3 }, height: "auto" }} loading='eager' />
				</Stack>
			</Container>
		</Stack >
	);
}
