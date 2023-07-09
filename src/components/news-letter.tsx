import { Button, Container, FormControl, Stack, TextField, Typography } from '@mui/material';
import NewsLetterbackground from '../assets/svgs/illustrations/news-letter.svg';

export default function NewsLetter() {
	return (
		<Container sx={{ mt: 4 }}>
			<Stack justifyContent={"center"} alignItems={"center"} spacing={4} sx={{ position: "relative", p: { xs: 2, md: 6 }, borderRadius: 2, background: `url(${NewsLetterbackground}) no-repeat center`, backgroundSize: "cover", overflow: "hidden" }}>
				<Stack sx={{ width: { xs: 1, md: 0.6 } }} spacing={{ xs: 2, md: 0 }}>
					<Typography variant='h4' fontWeight={900} color={"background.default"} textAlign={"center"}>Get 20% Off Your First Purchase When You Use Petco Credit Card</Typography>
					<Typography variant='body2' color={"background.default"} textAlign={"center"}>Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</Typography>
				</Stack>
				<FormControl sx={{ flexDirection: "row", alignItems: "stretch", gap: 1 }}>
					<TextField label="Type your Email" variant="outlined" color='info' focused />
					<Button variant='contained' color='secondary'>Subscribe</Button>
				</FormControl>
			</Stack>
		</Container>
	);
}
