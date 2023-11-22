import React from "react";
import {
	Ievent,
	IfloorPlan,
	InvmaBrand,
	Isponsor,
	Isponsor1,
} from "../../utils/icons.utils";
import { Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HomeLayout from "../../layouts/Home";
import Footer from "../../components/others/Footer";
import { Link } from "react-router-dom";


const Home = () => {




	return (
		<HomeLayout>
			<div>
				<header className="py-5 px-10">
					<div className="lg:min-h-[500px] min-h-[500px] flex justify-center items-center w-full">
						<div className=" text-center">
							<div className="flex justify-center">
								<img src={InvmaBrand} alt="logo" className="w-[75%] lg:mb-5" />
							</div>
							<p className="sm:text-xl lg:text-2xl text-lg font-thin lg:mt-0 mt-3">
								Landmark Centre, Victoria island Oniru, Lagos, Nigeria.
							</p>
							<p className="sm:text-xl lg:text-2xl text-lg font-thin">
								30th Oct. - 3rd Nov 2023
							</p>

							<hr className="my-8" />
							<div className="flex flex-wrap justify-center sm:gap-5 gap-3">
								<Button
								component={Link}
									color="success"
									size="large"
									to="/registration"
									className="py-2 px-5 bg-[#43a843] capitalize text-white rounded-xl shadow-lg sm:text-lg text-sm">
									{" "}
									Register Here
								</Button>
								<Button
								component={Link}
								to="/abstract"
									color="success"
									size="large"
									className="py-2 px-5 bg-[#43a843] capitalize text-white rounded-xl shadow-lg sm:text-lg text-sm">
									{" "}
									Submit Abstract
								</Button>
								<Button
								component={Link}
									color="success"
									size="large"
									className="py-2 px-5 bg-[#43a843] capitalize text-white rounded-lg shadow-xl sm:text-lg text-sm">
									{" "}
									Book A Stand
								</Button>
							</div>
						</div>
					</div>
				</header>

				<main className="pt-0">
					<section className="bg-[#eee] py-20">
						<Carousel
							infiniteLoop
							autoPlay
							showStatus
							showThumbs={false}
							showIndicators={false}
							swipeAble={true}
							showArrows={true}>
							<div>
								<div className="">
									<img src={Ievent} className="lg:w-[70%] w-[80%] lg:h-[500px]" alt="" />
								</div>
								<h2 className="text-xl mt-1">Our Previous Event</h2>
							</div>
							<div>
								<div>
									<img
										src={IfloorPlan}
										className="lg:w-[70%] w-[80%] lg:h-[500px]"
										alt=""
									/>
								</div>
								<h2 className="text-xl mt-1">Exhibition Floor Plan</h2>
							</div>
						</Carousel>
					</section>

					<section className="py-20 bg-slate-100">
						<h1 className="sm:text-4xl text-2xl text-center">
							{" "}
							<span className="pb-0 border-b-2 border-b-[#43a843]">
								Our
							</span>{" "}
							Sponsors
						</h1>
						<div className="flex items-center justify-center flex-wrap w-full sm:mt-10 mt-5">
							<img
								src={Isponsor1}
								alt=""
								className="mr-5 block sm:w-[300px]  w-[200px]"
							/>
							<img
								src={Isponsor}
								alt=""
								className="block sm:w-[160px] w-[120px]"
							/>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</HomeLayout>
	);
};

export default Home;
