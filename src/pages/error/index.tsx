import { Container, Typography } from '@mui/material';

export default function ErrorPage() {
	return (
		<Container component={"main"} sx={{ height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<Typography variant={"body1"}>Error 404 | Page not found</Typography>
		</Container>
	);
}
