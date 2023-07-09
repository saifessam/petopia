import { Container, AppBar, Stack, IconButton, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';

export default function DashboardPage() {
	return (
		<>
			<AppBar>
				<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
					<IconButton>
						<Home />
					</IconButton>
					<Typography variant='h6'>
						Good afternoon, Badr
					</Typography>
				</Stack>
			</AppBar>
			<Container component={"main"}>
				<Typography variant='h6'>
					Test
				</Typography>
			</Container>
		</>
	);
}
