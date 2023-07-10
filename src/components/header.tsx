import { Call, Close, Email, Menu, ShoppingCart } from '@mui/icons-material';
import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, Stack, Typography } from '@mui/material';
import { ReactComponent as FacebookIcon } from '../assets/svgs/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/svgs/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../assets/svgs/icons/twitter.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/svgs/icons/whatsapp.svg';
import { ReactComponent as LogoSVG } from '../assets/svgs/illustrations/logo.svg';
import { useState } from 'react';

export default function Header() {
	const [openedDrawer, setOpenedDrawer] = useState(false);
	const socials = [<FacebookIcon />, <InstagramIcon />, <TwitterIcon />, <WhatsAppIcon />];
	const tabs = [
		{ href: "/", label: "Home", color: "text.primary" },
		{ href: "/services", label: "Services", color: "text.primary" },
		{ href: "/shop", label: "Shop", color: "text.primary" },
		{ href: "/blog", label: "Blog", color: "secondary.main" },
		{ href: "/dashboard", label: "Dashboard", color: "secondary.main" },
	];

	return (
		<AppBar className='header' sx={{ flexDirection: 'column', alignItems: "stretch" }}>
			<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ display: { xs: "none", sm: "flex" }, bgcolor: "primary.main", px: 12, py: 1 }}>
				<Stack direction="row" spacing={2} useFlexGap>
					{socials.map((icon, index) => <Link href="#" key={index}>{icon}</Link>)}
				</Stack>
				<Stack direction="row" spacing={4} useFlexGap>
					<Link href="tel:0000 - 123456789" underline='none' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Call sx={{ color: "background.default" }} fontSize='small' />
						<Typography variant='body2' color={"background.default"}>0000 - 123456789</Typography>
					</Link>
					<Link href="mailto:info@example.com" underline='none' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Email sx={{ color: "background.default" }} fontSize='small' />
						<Typography variant='body2' color={"background.default"}>info@example.com</Typography>
					</Link>
				</Stack>
			</Stack>
			<Stack direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ px: { xs: 1, md: 6, lg: 12 }, py: 1 }}>
				<Stack direction="row" spacing={1} alignItems={'center'}>
					<LogoSVG width={"3rem"} height={"auto"} />
					<Typography variant='h6' fontWeight={"700"} color={"primary.main"}>Petopia</Typography>
				</Stack>
				<Stack direction="row" spacing={8} alignItems={'center'} sx={{ display: { xs: 'none', md: 'flex' } }}>
					{tabs.map((tab, index) => {
						return (
							<li>
								<Link href={tab.href} underline="none" key={index}>
									<Typography variant='subtitle2' color={tab.color}>{tab.label}</Typography>
								</Link>
							</li>
						);
					})}
				</Stack>
				<Button variant='contained' startIcon={<ShoppingCart sx={{ fill: "#9c5bf5" }} />} sx={{ display: { xs: "none", md: "flex" }, bgcolor: "background.default" }}>
					<Typography variant='button' color={"text.primary"}>(1 item)</Typography>
				</Button>
				<IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setOpenedDrawer(true)}>
					<Menu />
				</IconButton>
			</Stack>
			<Drawer anchor={"right"} open={openedDrawer} onClose={() => setOpenedDrawer(false)} sx={{ display: { xs: "block", md: "none" } }}>
				<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ px: 2 }}>
					<Typography variant='h6' fontWeight={700} color={"text.primary"}>Menu</Typography>
					<IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setOpenedDrawer(false)}>
						<Close />
					</IconButton>
				</Stack>
				<List sx={{ width: { xs: "70dvw", sm: "50dvw" } }}>
					{tabs.map((tab, index) => {
						return (
							<ListItem key={index}>
								<Link href={tab.href} underline="none" key={index}>
									<Typography variant='subtitle1' color={"text.primary"}>{tab.label}</Typography>
								</Link>
							</ListItem>
							// 		<li>
							// 	<Link href={tab.href} underline="none" key={index}>
							// 		<Typography variant='subtitle2'>{tab.label}</Typography>
							// 	</Link>
							// </li>
						);
					})}
				</List>
			</Drawer>
		</AppBar>
	);
}