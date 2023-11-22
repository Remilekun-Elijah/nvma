import React from "react";
import HomeLayout from "../../layouts/Home";
import Footer from "../../components/others/Footer";
import { InvmaBrand } from "../../utils/icons.utils";

const Abstract = () => {


	return (
		<HomeLayout>
			<header className="py-5 px-10">
				<div className="flex justify-center items-center w-full">
					<div className="text-center">
						<div className="flex justify-center">
							<img
								src={InvmaBrand}
								alt="logo"
								className="w-[75%] lg:mb-5 mb-4"
							/>
						</div>
						<h1 className="text-[green] lg:text-5xl md:text-5xl sm:text-4xl text-3xl">
							Abstract Submission
						</h1>
					</div>
				</div>
			</header>
			<hr />

<Footer />
   </HomeLayout>
)}

export default Abstract;