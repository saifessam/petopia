import { Email, Event, Person, Phone, Place, Visibility, WatchLater } from '@mui/icons-material';
import { Avatar, Badge, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';

export default function Contacts() {
	const posts = [
		{ badge: <Phone />, title: "Phone", data: ["(913) 756-3126", "(921) 557-1203"] },
		{ badge: <Email />, title: "Email", data: ["petopia@example.com", "petopia@email.com"] },
		{ badge: <Place />, title: "Addess", data: ["17 Parkman Place, 2122", "United States"] },
		{ badge: <WatchLater />, title: "Open Hours", data: ["Mon - Fri: 7am - 6pm", "Saturday: 9am - 4pm"] },
	];

	return (
		<Container sx={{ my: 4 }}>
			<Stack alignItems={"center"} spacing={2}>
				<Stack alignItems={"center"} sx={{ mb: 2 }}>
					<Typography variant='button' fontWeight={700} color={"primary.main"} textAlign={{ xs: "center", md: "start" }}>OUR CONTACTS</Typography>
					<Typography variant='h4' fontWeight={900} color={"text.primary"} textAlign={{ xs: "center", md: "start" }}>Contacts</Typography>
					<Typography variant='body1' color={"text.secondary"} textAlign={{ xs: "center", md: "start" }}>Massa enim nec dui nunc mattis enim ut tellus</Typography>
				</Stack>
				<Grid container spacing={2} direction={{ xs: "column", md: "row" }}>
					{posts.map((post, index) => (
						<Grid item xs={3} key={index}>
							<Card variant='outlined' sx={{ position: "relative", overflow: "visible", p: 2 }}>
								<Avatar sx={{ position: "absolute", top: "0", left: "50%", transform: "translate(-50%, -50%)", width: 48, height: 48, bgcolor: "primary.main" }}>{post.badge}</Avatar>
								<CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>
									<Typography variant='subtitle1' fontWeight={700} color={"text.primary"}>{post.title}</Typography>
									<Stack spacing={1}>
										<Stack alignItems={"center"}>
											<Typography variant='caption' color={"text.secondary"}>{post.data[0]}</Typography>
											<Typography variant='caption' color={"text.secondary"}>{post.data[1]}</Typography>
										</Stack>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Container >
	);
}
