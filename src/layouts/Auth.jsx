import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "@mui/system";
import AuthSidebar from "../components/Sidebars/Auth";
import IndexLayout from "./Index";
import { useAuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { setCurrentScreen } from "../features/auth/authSlice"


const AuthLayout = ({ children}) => {
	
	const [next, setNext] = React.useState(false);
	const { classNames } = useAuthContext(),
	dispatch = useDispatch()

	const mainContent = (
		<Container
			sx={{
				marginLeft: "auto",
			}}
			className={`sm:block w-[98%] mt-3 sm:mt-[5em] md:mt-[1em] lg:mt-[1em] ${classNames} transition-all mb-10`}>	
			{children}
		</Container>
	);

	return (
		<IndexLayout {...{ sidebar: <AuthSidebar {...{setCurrentScreen: screen => dispatch(setCurrentScreen(screen))}} />, children: mainContent, next }} />
	);
};

export default AuthLayout;
