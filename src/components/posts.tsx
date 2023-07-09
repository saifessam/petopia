import { Event, Person } from '@mui/icons-material';
import { Badge, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';

export default function Posts() {
	const posts = [
		{ badge: "TRAINING", image: "posts-post-1.png", author: "by Corabelle Durrad", date: "02.01.2022", title: "5 Crazy Things Dogs Do When Left Alone At Home", subTitle: "Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus." },
		{ badge: "TRAINING", image: "posts-post-2.png", author: "by Corabelle Durrad", date: "02.01.2022", title: "Your Dog Desperately Needs From You", subTitle: "Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet." },
		{ badge: "PET FOOD", image: "posts-post-3.png", author: "by Corabelle Durrad", date: "02.01.2022", title: "Top Cat Foods to Consider If You Are a First Time Owner", subTitle: "Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis." },
	];

	return (
		<Container sx={{ my: 4 }}>
			<Stack alignItems={"center"} spacing={2}>
				<Stack alignItems={"center"}>
					<Typography variant='h4' fontWeight={900} color={"text.primary"}>Other Posts</Typography>
				</Stack>
				<Grid container spacing={2} direction={{ xs: "column", md: "row" }}>
					{posts.map((post, index) => (
						<Grid item xs={4} key={index}>
							<Card sx={{ position: "relative", boxShadow: "none", overflow: "visible" }}>
								<Badge badgeContent={post.badge} color='secondary' sx={{ position: "absolute", top: 0, right: "15%", whiteSpace: "nowrap" }} />
								<CardMedia image={require(`../assets/images/${post.image}`)} component={"img"} alt={post.title} />
								<CardContent sx={{ px: 0, display: "flex", flexDirection: "column", gap: 0.5 }}>
									<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
										<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
											<Person color={'primary'} fontSize='inherit' />
											<Typography variant='caption' fontWeight={700} color={"text.primary"}>{post.author}</Typography>
										</Stack>
										<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
											<Event color={'primary'} fontSize='inherit' />
											<Typography variant='caption' fontWeight={700} color={"text.primary"}>{post.date}</Typography>
										</Stack>
									</Stack>
									<Typography variant='body1' fontWeight={900} color={"text.primary"}>{post.title}</Typography>
									<Typography variant='body2' color={"text.secondary"}>{post.title}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Container >
	);
}
