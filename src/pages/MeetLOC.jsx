import React, { useRef, useState } from "react";
import HomeLayout from "../layouts/Home";
import Footer from "../components/others/Footer";
import { InvmaBrand } from "../utils/icons.utils";
import { styled } from "@mui/material/styles";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	IconButton,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import locData from "../utils/loc_data";

const MeetLOC = () => {
	const [locs, setLocs] = useState(locData);

	const ExpandMore = styled((props) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	}));

	const expanded = useRef(true);

	const handleExpandClick = (e) => {
		let target = e.target;
		if (e.target.tagName === "path")
			target = e.target.parentElement.parentElement;
		else if (e.target.tagName === "svg") target = e.target.parentElement;

		const currentLocName = target.id;
		let locss = locs.map((loc) => {
			if (loc.name === currentLocName) loc.open = !loc.open;
			else loc.open = false;
			return loc;
		});
		setLocs(locss);
	};

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
							Meet The LOC
						</h1>
					</div>
				</div>
			</header>
			<hr />
			<div
				className="py-20 lg:px-[10%] px-[5%] bg-[#fbfafa]"
				style={{ borderTopLeftRadius: "100" }}>
				<div className="flex flex-wrap sm:gap-5 gap-10 justify-around">
					{locs.map((loc, key) => {
						return (
							<Card {...{ key }} sx={{ maxWidth: 330 }}>
								<CardHeader
									avatar={
										<Avatar
											sx={{ bgcolor: loc.color[500] }}
											aria-label="recipe">
											{loc.nameAbbr}
										</Avatar>
									}
									title={loc.name}
									subheader={loc.role}
								/>
								<CardMedia
									component="img"
									image={loc.img}
									alt={loc.name}
								/>
								<CardContent>
									<Typography
										variant="body2"
										className=" "
										style={{ marginBottom: "0px !important" }}
										color="text.secondary">
										{loc.shortBio}
									</Typography>
								</CardContent>
								{loc.more.length > 0 && (
									<>
										<CardActions disableSpacing id={loc.name}>
											<ExpandMore
												id={loc.name}
												expand={loc.open}
												onClick={handleExpandClick}
												aria-expanded={expanded}
												aria-label="show more">
												<ExpandMoreIcon />
											</ExpandMore>
										</CardActions>
										<Collapse in={loc.open} timeout="auto" unmountOnExit>
											{loc.more.map((bio, key) => {
												return (
													<CardContent {...{ key }}>
														<Typography
															paragraph
															variant="body2"
															color="text.secondary"
															className="mt-0 pt-0">
															{bio}
														</Typography>
													</CardContent>
												);
											})}
										</Collapse>
									</>
								)}
							</Card>
						);
					})}
				</div>
			</div>

			<Footer />
		</HomeLayout>
	);
};

export default MeetLOC;
