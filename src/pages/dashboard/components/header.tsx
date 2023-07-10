import { Home } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();

	return (
		<AppBar sx={{ position: "static" }}>
			<Toolbar>
				<Stack direction={"row"} alignItems={"center"} spacing={0.5}>
					<IconButton onClick={() => navigate("/")}>
						<Home />
					</IconButton>
					<Typography variant='h6' fontWeight={700} color={"text.primary"}>
						Good afternoon, Badr
					</Typography>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
