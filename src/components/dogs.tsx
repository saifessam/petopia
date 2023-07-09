import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Rating, Stack, Typography } from '@mui/material';

export default function Dogs() {
	const featuredProducts = [
		{ id: "1", image: "dogs-featured-1.png", title: "Detachable Gravity Bowl Food Feeder", rating: 5, price: 30.12 },
		{ id: "2", image: "dogs-featured-2.png", title: "Dog Collar for Small, Medium, Large Dogs", rating: 4.5, price: 16.88 },
		{ id: "3", image: "dogs-featured-3.png", title: "Pink Embossed Spiked Collar", rating: 3, price: 34.98 },
	];
	const onSaleProducts = [
		{ id: "4", image: "dogs-onsale-1.png", title: "Black Leather Spike Dog Collar, Small", rating: 3, price: 30.12 },
		{ id: "5", image: "dogs-onsale-2.png", title: "Dog Chew Toys for Chewers", rating: 4, price: 16.88 },
		{ id: "6", image: "dogs-onsale-3.png", title: "Duck Jerky Strips Dog Treats", rating: 4.5, price: 34.98 },
	];
	const topRatedProducts = [
		{ id: "7", image: "dogs-toprated-1.png", title: "Carrying Bag for Cats Weighing up to 6 kg", rating: 5, price: 30.12 },
		{ id: "8", image: "dogs-toprated-2.png", title: "Rhinestone Pet Collar", rating: 5, price: 16.88 },
		{ id: "9", image: "dogs-toprated-3.png", title: "Teeth Cleaning Toy for Dogs", rating: 5, price: 34.98 },
	];

	return (
		<Container sx={{ mt: 4 }}>
			<Grid container spacing={2} sx={{ alignItems: "stretch" }} direction={{ xs: "column", md: "row" }}>
				<Grid item xs={4}>
					<Stack spacing={3} sx={{ height: 1 }} alignItems={{ xs: "center", md: "flex-start" }}>
						<Typography variant='h5' fontWeight={900} color={"text.primary"}>Featured Products</Typography>
						{featuredProducts.map((product) => (
							<Card key={product.id} variant="outlined" sx={{ display: "flex", flex: 1, alignItems: "center", gap: 2, bgcolor: "#FBF9FF" }}>
								<CardMedia image={require(`../assets/images/${product.image}`)} component={"img"} alt={product.title} sx={{ aspectRatio: "1/1", width: "30%" }} />
								<CardContent>
									<Typography variant='body1' fontWeight={900} color={"text.primary"}>{product.title}</Typography>
									<Rating value={product.rating} precision={0.5} readOnly size="small" />
									<Typography variant='subtitle1' fontWeight={900} color={"primary.main"}>{product.price}</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={3} sx={{ height: 1 }} alignItems={{ xs: "center", md: "flex-start" }}>
						<Typography variant='h5' fontWeight={900} color={"text.primary"}>On Sale Products</Typography>
						{onSaleProducts.map((product) => (
							<Card key={product.id} variant="outlined" sx={{ display: "flex", flex: 1, alignItems: "center", gap: 2, bgcolor: "#FBF9FF" }}>
								<CardMedia image={require(`../assets/images/${product.image}`)} component={"img"} alt={product.title} sx={{ aspectRatio: "1/1", width: "30%" }} />
								<CardContent>
									<Typography variant='body1' fontWeight={900} color={"text.primary"}>{product.title}</Typography>
									<Rating value={product.rating} precision={0.5} readOnly size="small" />
									<Typography variant='subtitle1' fontWeight={900} color={"primary.main"}>{product.price}</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Grid>
				<Grid item xs={4}>
					<Stack spacing={3} sx={{ height: 1 }} alignItems={{ xs: "center", md: "flex-start" }}>
						<Typography variant='h5' fontWeight={900} color={"text.primary"}>Top Rated Products</Typography>
						{topRatedProducts.map((product) => (
							<Card key={product.id} variant="outlined" sx={{ display: "flex", flex: 1, alignItems: "center", gap: 2, bgcolor: "#FBF9FF" }}>
								<CardMedia image={require(`../assets/images/${product.image}`)} component={"img"} alt={product.title} sx={{ aspectRatio: "1/1", width: "30%" }} />
								<CardContent>
									<Typography variant='body1' fontWeight={900} color={"text.primary"}>{product.title}</Typography>
									<Rating value={product.rating} precision={0.5} readOnly size="small" />
									<Typography variant='subtitle1' fontWeight={900} color={"primary.main"}>{product.price}</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
}
