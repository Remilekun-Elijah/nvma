import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@mui/material";
import Navbar from "../components/others/Navbar";

export default function IndexLayout({
	sidebar,
	children,
	next,
	sidebarClass = `w-full ${next ? 'hidden' : 'block'} sm:block sm:w-[48%] md:w-[40%] lg:w-[35%] xl:w-[30%]`,
	mainClass = `w-full ${next ? 'block' : 'hidden'} sm:block sm:w-[52%] md:w-[60%]  lg:w-[65%] xl:w-[70%]`,
}) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Navbar />
			<Container>
			{children}
			</Container>
		</Box>
	);
}
