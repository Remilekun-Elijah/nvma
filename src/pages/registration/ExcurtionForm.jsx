import React, { useState } from "react";
import HomeLayout from "../../layouts/Home";
import Footer from "../../components/others/Footer";
import { InvmaBrand } from "../../utils/icons.utils";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/base";
import { useLocation, useNavigate } from "react-router-dom";
import {
	Card,
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { getAuthData, setPayload } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { vcreateMember } from "../../utils/validators";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SailingIcon from "@mui/icons-material/Sailing";
import { getAmount } from "../../utils/helper";

const ExcurtionForm = () => {
	const navigate = useNavigate(),
		[loading, setLoading] = useState(false),
		[tourPrice, setTourPrice] = useState(''),
		dispatch = useDispatch(),
		{ state } = useLocation(),
		{ model } = useSelector(getAuthData),
		{ values, handleChange, handleSubmit, errors } = useFormik({
			initialValues: model,
			onSubmit: async (payload) => {
				setLoading(true);	
				setTimeout(() => {
					setLoading(false);
					navigate("/registration/form/summary", {
						state: { ...state, tourAndExcursion: payload?.tourAndExcursion, tourPrice },
					});
					dispatch(setPayload({...state, tourAndExcursion: payload?.tourAndExcursion}))
				}, 2000);
			},
		});
	const events = [
		{
			price: 3000,
			date: "Oct 31, 2023",
			time: "11am - 4pm",
			places: [
				"Nike Arts Centre",
				"Lekki Conservation Centre",
				"La Campaigne Tropican	",
			],
		},
		{
			price: 3000,
			date: " Oct 31, 2023",
			time: "11am - 4pm",
			places: [
				"Eko Atlantic City",
				"National Museum, Onikan",
				"J.K. Randle Yoruba Centre, Onikan",
				"Takwa Bay by Boat",
			],
		},
		{
			price: 3000,
			date: "Nov 1, 2023",
			time: "11am - 4pm",
			places: [
				"Nike Arts Centre",
				"Lekki Conservation Centre",
				"La Campaigne Tropican	",
			],
		},
		{
			price: 3000,
			date: "Nov 1, 2023",
			time: "11am - 4pm",
			places: [
				"Eko Atlantic City",
				"National Museum, Onikan",
				"J.K. Randle Yoruba Centre, Onikan",
				"Takwa Bay by Boat",
			],
		},
	];
	
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
							Registration
						</h1>
					</div>
				</div>
			</header>

			<hr />
			<div
				className="py-20 lg:px-[20%] px-[5%] bg-[#fbfafa]"
				style={{ borderTopLeftRadius: "100" }}>
				<Box className="text-[var(--c-dark-1)] flex">
					<span
						className="flex items-center cursor-pointer"
						onClick={(_) => navigate(-1)}>
						<ArrowBackIcon className="mx-2" fontSize="small" />
						<Typography className="text-[400] text-[16px] ">Go back</Typography>
					</span>
				</Box>

				<section>
					<h2 className="text-lg  md:text-left text-center font-bold mt-10">
						<span className="border-b-2 border-[#43a843]">Delegate</span>{" "}
						Registration Fee
					</h2>
					<hr />
					<blockquote className="bg-slate-100 mt-8 py-3 px-2">
						<p className="text-left">
							<span className="text-[#555]">
								<span className="text-bold text-[#111]">NB:</span> Registration
								Fees cover Conference Materials, Tea Break, Lunch & Writing
								Materials
							</span>
						</p>
					</blockquote>

					<div className="flex justify-between items-center mt-5">
						<div className="flex flex-wrap">
							<p>{state?.membershipType}</p>{" "}
							<cite className="block text-[#555]">
								- {state?.regType} Registration
							</cite>
						</div>

						<div className="flex">
							<p className="sm:mr-2 mr-1 font-bold">
								{state?.membershipType === "International Participants"
									? "USD"
									: "NGN"}
							</p>
							<p>{getAmount(state?.membershipPrice)}</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-lg  md:text-left text-center font-bold mt-10">
						<span className="border-b-2 border-[#43a843]">Tours</span> &
						Recreations
					</h2>
					<hr />

					<div className="flex flex-wrap 2xl:gap-5 gap-5 md:justify-start justify-center my-5 md:gap-5 ">
						{events.map((event, key) => {
							return (
								<Card
									{...{ key }}
									sx={{
										width: "100%",
										maxWidth: 320,
										bgcolor: "#555",
										color: "white",
									}}>
									<Box sx={{ px: 1, my: 2 }}>
										<Grid container alignItems="center">
											<Grid item xs>
												<Typography
													gutterBottom
													variant="h4"
													className="sm:text-3xl text-xl"
													component="div">
													City Tour {key + 1}
												</Typography>
											</Grid>
											<Grid item>
												<Typography gutterBottom variant="h6" component="div">
													NGN<span className="font-bold">{getAmount(event.price)}</span>
												</Typography>
											</Grid>
										</Grid>
										<div className="flex flex-col"></div>
									</Box>
									<Divider variant="middle" />
									<Box sx={{ m: 2 }}>
										<div className="flex justify-start mb-2">
											<AccessTimeIcon className="mr-4" />
											<Typography className="antonio" variant="p">
												{event.date} -{" "}
												<span className="antonio text-[#888]">
													{event.time}
												</span>
											</Typography>
										</div>
										{event.places.map((place, key) => {
											return (
												<div {...{ key }} className="flex mb-2">
													{key === 0 ? (
														<HomeIcon className="mr-4" />
													) : event.places.length > 3 &&
													  key === event.places.length - 1 ? (
														<SailingIcon className="mr-4" />
													) : (
														<CheckIcon className="mr-4" />
													)}
													<p className="sm:text-base text-sm">{place}</p>
												</div>
											);
										})}
									</Box>
								</Card>
							);
						})}
					</div>

					<Box noValidate component="form" onSubmit={handleSubmit}>
						<FormControl
							required
							error={errors.tourAndExcursion}
							component="fieldset"
							className="mb-5"
							variant="standard">
							<Typography className="text-[400] text-xl text-left mb-3 mt-8 ml-3 text-[#040316]">
								<span className="pb-0 border-b-2 border-b-[#43a843]">Tour</span>{" "}
								Options
							</Typography>

							<RadioGroup
								aria-labelledby="tourAndExcursion"
								value={values.tourAndExcursion}
								name="tourAndExcursion">
								{events.map((event, key) => {
									return (
										<div
											{...{ key }}
											className="flex justify-between flex-wrap">
											<FormControlLabel
												value={`Lagos City Tour ${key + 1} - ${event.date}`}
												onChange={e=> {setTourPrice(event.price); handleChange(e)}}
												control={<Radio color="success" />}
												label={`Lagos City Tour ${key + 1} - ${event.date}`}
											/>
											{values.tourAndExcursion ===
												`Lagos City Tour ${key + 1} - ${event.date}` && (
												<div className="flex items-center sm:ml-0 ml-8">
													<div className="flex">
														<p className="sm:mr-2 mr-1 font-bold">NGN</p>
														<p>{getAmount(event.price)}</p>
													</div>
												</div>
											)}
										</div>
									);
								})}
							</RadioGroup>
							{errors.tourAndExcursion && (
								<FormHelperText
									className="text-red-500 bg-white pt-1 text-[0.75rem] px-[14px] leading-[1.66] font-normal"
									color="error">
									{errors.tourAndExcursion}
								</FormHelperText>
							)}
						</FormControl>

						<Box className="flex justify-center  m-auto">
							<LoadingButton
								onClick={(_) => navigate(-1)}
								className="my-10 w-1/2 rounded-[10px] bg-[#333] hover:bg-[black] self-end shadow-none normal-case mr-5"
								sx={{
									".MuiLoadingButton-loadingIndicatorCenter": {
										color: "white",
									},
								}}
								size="large"
								variant="contained"
								loading={false}
								fullWidth>
								Back
							</LoadingButton>

							<LoadingButton
								className="my-10 w-1/2 rounded-[10px] bg-[var(--c-primary-0)] hover:bg-[var(--c-primary-1)]  self-end shadow-none normal-case"
								sx={{
									".MuiLoadingButton-loadingIndicatorCenter": {
										color: "var(--c-bg-color) !important",
									},
								}}
								size="large"
								type="submit"
								variant="contained"
								disabled={loading}
								loading={loading}
								fullWidth>
								Next
							</LoadingButton>
						</Box>
					</Box>
				</section>
			</div>

			<Footer />
		</HomeLayout>
	);
};

export default ExcurtionForm;
