import { ArrowForwardOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, CardHeader, Container, Grid, Stack, Typography } from '@mui/material';
import { ReactComponent as BoneSVG } from '../assets/svgs/illustrations/bone.svg';
import { ReactComponent as BrushSVG } from '../assets/svgs/illustrations/brush.svg';
import { ReactComponent as CupSVG } from '../assets/svgs/illustrations/cup.svg';
import { ReactComponent as FirstAidSVG } from '../assets/svgs/illustrations/first-aid.svg';
import { ReactComponent as HouseSVG } from '../assets/svgs/illustrations/house.svg';
import ServiceBackground from '../assets/svgs/illustrations/services.svg';
import { ReactComponent as WalkingSVG } from '../assets/svgs/illustrations/walking.svg';

export default function Services() {
	const services = [
		{ image: <BrushSVG />, title: "Pet Grooming", body: "Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam", subTitle: "From $39/complex" },
		{ image: <CupSVG />, title: "Pet Training", body: "Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat", subTitle: "From $27/hour" },
		{ image: <BoneSVG />, title: "Pet Taxi", body: "Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit", subTitle: "From $22/trip" },
		{ image: <FirstAidSVG />, title: "Health & Wellness", body: "Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam", subTitle: "From $39/visit" },
		{ image: <HouseSVG />, title: "Pet Hotel", body: "Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n", subTitle: "From $15/night" },
	];

	return (
		<Container sx={{ my: 4 }}>
			<Stack alignItems={"center"} spacing={2}>
				<Stack alignItems={"center"}>
					<Typography variant='button' fontWeight={700} color={"primary.main"}>OUR SERVICES</Typography>
					<Typography variant='h5' fontWeight={900} color={"text.primary"}>All Pet Care Services</Typography>
				</Stack>
				<Grid container direction={{ xs: "column", sm: "row" }} spacing={2}>
					<Grid item xs={12} sm={6} md={4}>
						<Card sx={{ height: 1, p: 1, boxShadow: "none", background: `url(${ServiceBackground}) no-repeat center`, backgroundSize: "cover", overflow: "hidden" }}>
							<CardHeader avatar={<WalkingSVG />} title={<Typography variant='h5' fontWeight={700} color={"background.default"}>Walking & Sitting</Typography>} />
							<CardContent>
								<Stack spacing={1} alignItems={"flex-start"}>
									<Typography variant='body2' color={"background.default"}>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</Typography>
									<Typography variant='body1' fontWeight={700} color={"background.default"}>From $15/hour</Typography>
									<Button endIcon={<ArrowForwardOutlined />} color='secondary'>Get Service</Button>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
					{services.map((service, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card variant="outlined" sx={{ height: 1, p: 1 }}>
								<CardHeader avatar={service.image} title={<Typography variant='h5' fontWeight={700} color={"text.primary"}>{service.title}</Typography>} />
								<CardContent>
									<Stack spacing={1} alignItems={"flex-start"}>
										<Typography variant='body2' color={"text.primary"}>{service.body}</Typography>
										<Typography variant='body1' fontWeight={700} color={"text.primary"}>{service.subTitle}</Typography>
										<Button endIcon={<ArrowForwardOutlined />} color='primary'>Get Service</Button>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Container>
	);
}