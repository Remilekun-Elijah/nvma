import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IArrowUp } from '../../utils/icons.utils';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
  const [scrollPosition, setScrollPosition] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

  return (
    <React.Fragment>
      <footer className="p-20 bg-[#111] text-white">
					<div className="flex justify-center items-start flex-wrap gap-5">
						<div>
							<h2 className="md:text-3xl text-2xl mb-3">Top Links</h2>
							<ul className="text-md text-[#c8c5c5]">
								<li className="">
									<Link to="/registration">Register Here</Link>
								</li>
								<li className="my-1">
									<Link to="/">Submit Abstraction</Link>
								</li>
								<li>
									<Link to="/">Book A Stand</Link>
								</li>
							</ul>
						</div>

						<div className="md:mx-20 mx-0">
							<h2 className="md:text-3xl text-2xl mb-3">Top Links</h2>
							<ul className="text-md text-[#c8c5c5]">
								<li className="">
									<Link to="/registration">Register Here</Link>
								</li>
								<li className="my-1">
									<Link to="/">Submit Abstraction</Link>
								</li>
								<li>
									<Link to="/">Book Stand</Link>
								</li>
							</ul>
						</div>

						<div className="">
							<h2 className="md:text-3xl text-2xl mb-3">Connect with Us</h2>
							<div className="text-lg text-[#c8c5c5] flex justify-center">
								<Link to="https://facebook.com" className="block">
									<FacebookIcon className="text-3xl" />{" "}
								</Link>
								<Link to="https://instagram.com" className="block">
									<InstagramIcon className="text-3xl mx-5" />{" "}
								</Link>
								<Link to="https://twitter.com" className="block">
									<TwitterIcon className="text-3xl" />{" "}
								</Link>
							</div>
							<Link
								target="_blank"
								rel="noreferrer"
								to="https://www.google.com.ng/maps/place/75a+Akinola+Cole+Cres,+Oba+Akran+101233,+Ikeja,+Lagos/@6.613894,3.3411296,17z/data=!3m1!4b1!4m6!3m5!1s0x103b93d474cb2cf9:0x4e5c5d7e6c629392!8m2!3d6.6138887!4d3.3437045!16s%2Fg%2F11h3mxj14d?entry=ttu"
								className="block md:my-2 my-5 text-[#c8c5c5]">
								75A, Akinola Cole Crescent, Off Adeniyi Jones Avenue, Ikeja,
								Lagos.{" "}
							</Link>
							<div className="text-[#c8c5c5]">
								<Link to="tel:08033061214">0803 306 1214</Link>,{" "}
								<Link to="tel:08050501927">0805 050 1927</Link>,{" "}
								<Link to="tel:08023043372">0802 304 3372. </Link>
							</div>
						</div>
					</div>

					{scrollPosition > 100 && (
						<Box
							className="float-right right-0 py-3 bg-white rounded-lg w-[70px]  h-[100%] flex justify-evenly hover:bg-gray-200 text-[var(--c-primary-2)] cursor-pointer m-auto mb-5 md:m-0"
							onClick={handleScrollToTop}>
							{" "}
							<span className="">Top</span>
							<img src={IArrowUp} alt="youtube" className="" />
						</Box>
					)}
				</footer>
				<footer>
					<p className="text-center">
						{" "}
						&copy; website 2023, All rights reserved.
					</p>
				</footer>
    </React.Fragment>
  );
}

export default Footer;
