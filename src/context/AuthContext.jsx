import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const useAuthContext = () => useContext(Context);

export default function AuthProvider({ children }) {
	
	const [currentScreen, setCurrentScreen] = useState("landing-page");
	let [classNames, setClassName] = React.useState('md:w-[75%] lg:w-[65%] xl:w-[50%]');

	const value = {
		currentScreen,
		setCurrentScreen,
		classNames,
		setClassName,
	};

	return <Context.Provider {...{ value }}> {children} </Context.Provider>;
}
