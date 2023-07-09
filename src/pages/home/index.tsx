import { Box } from "@mui/material";
import Banner from "../../components/banner";
import Blogs from "../../components/blog";
import Cards from "../../components/cards";
import Contacts from "../../components/contacts";
import Dogs from "../../components/dogs";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import NewsLetter from "../../components/news-letter";
import Posts from "../../components/posts";
import Services from "../../components/services";

export default function HomePage() {
	return (

		<Box sx={{ bgcolor: "background.default" }}>
			<Header />
			<Box component={"main"}>
				<Hero />
				<Banner />
				<Services />
				<Cards />
				<Dogs />
				<NewsLetter />
				<Blogs />
				<Contacts />
				<Posts />
			</Box>
			<Footer />
		</Box>
	);
}
