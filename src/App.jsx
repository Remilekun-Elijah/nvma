import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import RegistrationForm from "./pages/registration/RegistrationForm";
import ExcurtionForm from "./pages/registration/ExcurtionForm";
import Summary from "./pages/registration/Summary";
import MeetLOC from "./pages/MeetLOC";
import Abstract from "./pages/registration/Abstracts";

function App() {
	function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

	return (
		<BrowserRouter>
			<div
				className={`App`}>
				<Routes>
				
					<Route
						{...{
							path: '/',
							element: <Home />,
						}}
					/>
					<Route
						{...{
							path: '/registration',
							element: <Registration />,
						}}
					/>

<Route
						{...{
							path: '/registration/form',
							element: <RegistrationForm />,
						}}
					/>

					<Route
						{...{
							path: '/registration/form/excursion',
							element: <ExcurtionForm />,
						}}
					/>

<Route
						{...{
							path: '/registration/form/summary',
							element: <Summary />,
						}}
					/>

<Route
						{...{
							path: '/meet-the-loc',
							element: <MeetLOC />,
						}}
					/>
					
					<Route
						{...{
							path: '/abstract',
							element: <Abstract />,
						}}
					/>

					{/* <Route element={<ProtectedRoutes />}> */}
						{/* {Pages.map((p, i) => (
							<Route key={i} {...p} />
						))} */}
					{/* </Route> */}
				</Routes>
					<ScrollToTop/>
			</div>
		</BrowserRouter>
	);
}

export default App;
