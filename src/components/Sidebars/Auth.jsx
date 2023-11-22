import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
	Avatar,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Item from "../../components/Item";
// import { IBrand } from '../../utils/icons.utils'

export default function AuthSidebar({setNext, setCurrentScreen}) {
  return (
    <Item className="bg-[var(--c-primary-0)] h-full sm:h-[98vh] p-[2em]">
						{/* <img src={IBrand} alt="" /> */}
						<Box
							width={"100%"}
							flexDirection="column"
							height={"100%"}
							display={"flex"}
       className='justify-around content-around sm:justify-between'>
							<Grid width={"100%"} className='sm:mt-5'>
								<Box>
									<Typography
										variant="h3"
										className="text-white text-left mt-[1em] md:text-3xl lg:text-4xl xl:text-5xl text-3xl ">
										Get accessible HMO plans with us.
									</Typography>
									<Typography
										variant="h6"
										className="text-white font-normal mt-8 text-left">
										{" "}
										With HIMP you have access to our accessible yet reliable
										platform that helps get you started with HMO plans.
									</Typography>

									<Box display='flex' justifyContent='flex-start' className="mt-8 mb-3 sm:hidden">
									<Button onClick={_=> setNext(true)} variant="outlined" sx={{border: '1px solid white', color: 'white'}} size='large' >Get Started</Button>
									</Box>
									<Box display='flex' justifyContent='flex-start' className="mt-14 mb-3 sm:block hidden ">
									<Button onClick={_=> setCurrentScreen('home-page')} variant="outlined" className="w-[80%] h-[52%] bg-[white] rounded-lg" sx={{ color: 'var(--c-primary-0)]'}} size='large' >Sign up</Button>
									</Box>
									<Box display='flex' justifyContent='flex-start' className="mt-8 mb-3 sm:block hidden">
									<Button onClick={_=> setCurrentScreen('login')}  className="w-[80%] h-[52%] bg-[var(--c-primary-3)] rounded-lg shadow-lg" sx={{ color: 'white'}} size='large' >Login</Button>
									</Box>
								</Box>
							</Grid>

							<Grid width={"100%"} className='sm:mb-5'>
								<Carousel
									infiniteLoop
									autoPlay
									showStatus
									showThumbs={false}
									showArrows={false}>
									<Card className={"bg-[var(--c-primary-3)] p-4 shadow-lg"}>
										<CardActionArea>
											<CardContent>
												<Typography
													variant="body2"
													color="white"
													className="text-left">
													HIMP has been very helpful to Famfav in so many ways
													we didn't know we needed help on, we have been able to
													get everyone in the company onboard the platform for
													easy HMO usage. i wil gladly recommend HIMP to any
													company in need of a good HMO platform.
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Grid
												spacing={4}
												direction={"row"}
												container
												columns={12}>
												<Grid xs={4} className="user">
													<Avatar src="" sx={{ width: 56, height: 56 }} />
												</Grid>
												<Grid
													xs={8}
													direction={"column"}
													color="white"
													sx={{ textAlign: "left" }}>
													<Typography
														component={"strong"}
														className="font-bold">
														John Doe
													</Typography>
													<Typography>CEO, Famfav</Typography>
												</Grid>
											</Grid>
										</CardActions>
									</Card>

									<Card className={"bg-[var(--c-primary-3)] p-4 shadow-lg"}>
										<CardActionArea>
											<CardContent>
												<Typography
													variant="body2"
													color="white"
													className="text-left">
													HIMP has been very helpful to Famfav in so many ways
													we didn't know we needed help on, we have been able to
													get everyone in the company onboard the platform for
													easy HMO usage. i wil gladly recommend HIMP to any
													company in need of a good HMO platform.
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Grid
												spacing={4}
												direction={"row"}
												container
												columns={12}>
												<Grid xs={4} className="user">
													<Avatar src="" sx={{ width: 56, height: 56 }} />
												</Grid>
												<Grid
													xs={8}
													direction={"column"}
													color="white"
													sx={{ textAlign: "left" }}>
													<Typography
														component={"strong"}
														className="font-bold">
														John Doe
													</Typography>
													<Typography>CEO, Famfav</Typography>
												</Grid>
											</Grid>
										</CardActions>
									</Card>

									<Card className={"bg-[var(--c-primary-3)] p-4 shadow-lg"}>
										<CardActionArea>
											<CardContent>
												<Typography
													variant="body2"
													color="white"
													className="text-left">
													HIMP has been very helpful to Famfav in so many ways
													we didn't know we needed help on, we have been able to
													get everyone in the company onboard the platform for
													easy HMO usage. i wil gladly recommend HIMP to any
													company in need of a good HMO platform.
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Grid
												spacing={4}
												direction={"row"}
												container
												columns={12}>
												<Grid xs={4} className="user">
													<Avatar src="" sx={{ width: 56, height: 56 }} />
												</Grid>
												<Grid
													xs={8}
													direction={"column"}
													color="white"
													sx={{ textAlign: "left" }}>
													<Typography
														component={"strong"}
														className="font-bold">
														John Doe
													</Typography>
													<Typography>CEO, Famfav</Typography>
												</Grid>
											</Grid>
										</CardActions>
									</Card>
								</Carousel>
							</Grid>
						</Box>
					</Item>
  )
}
