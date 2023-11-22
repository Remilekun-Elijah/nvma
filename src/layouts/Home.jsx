import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeSidebar from "../components/Sidebars/Home";

const HomeLayout = ({ children, title, subtitle }) => {
	return <HomeSidebar {...{ children, title, subtitle }}/>
};

export default HomeLayout;
