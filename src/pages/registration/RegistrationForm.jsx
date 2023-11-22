import React, { useState } from "react";
import HomeLayout from "../../layouts/Home";
import Footer from "../../components/others/Footer";
import { InvmaBrand } from "../../utils/icons.utils";
import Box from "@mui/material/Box";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { FormControl } from "@mui/base";
import { useNavigate } from "react-router-dom";
import {
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoadingButton } from "@mui/lab";
import SelectInput from "../../components/SelectInput";
import PhoneNumberInput from "../../components/Phone/PhoneInput";
import states from "../../utils/states";
import countries from "../../utils/countries";
import { useFormik } from "formik";
import { getAuthData, setPayload } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { vcreateMember } from "../../utils/validators";

const RegistrationForm = () => {
	const navigate = useNavigate(),
		[loading, setLoading] = useState(false),
    [regType, setRegType] = useState(''),
		dispatch = useDispatch(),
		{ model } = useSelector(getAuthData),
		{
			values,
			handleBlur,
			handleChange,
			handleFocus,
			handleSubmit,
			setValues,
			errors,
			touched,
		} = useFormik({
			validationSchema: vcreateMember,
			initialValues: model,
			onSubmit: async (payload)=> {
        dispatch(setPayload(payload))
				setLoading(true);
				setTimeout(() => {
					setLoading(false);
					navigate("/registration/form/excursion", {state: {...payload, regType}});
				}, 2000);
			},
		});
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
						<p className="sm:text-xl lg:text-2xl text-md font-thin lg:mt-5 mt-3">
							Landmark Centre, Victoria island Oniru, Lagos, Nigeria.
						</p>
						<p className="sm:text-xl lg:text-2xl text-md font-normal">
							30th Oct. - 3rd Nov 2023
						</p>
					</div>
				</div>
			</header>

			<hr />
			<div
				className="py-20 lg:px-[20%] px-[5%] bg-[#fbfafa]"
				style={{ borderTopLeftRadius: "100" }}>
				<Box className="text-[var(--c-dark-1)] flex">
					<span
						className="flex cursor-pointer items-center"
						onClick={(_) => navigate(-1)}>
						<ArrowBackIcon className="mx-2" fontSize="small" />
						<Typography className="text-[400] text-[16px] ">Go back</Typography>
					</span>
				</Box>
				<Typography className="text-[400] text-xl mt-8 ml-3 text-[#040316]">
					<span className="pb-0 border-b-2 border-b-[#43a843]">Delegate</span>{" "}
					Details
				</Typography>
				<Box
					className="rounded-lg lg:px-[4em] px-[1em]"
					sx={{
						className: "w-[100%] lg:w-[80%]",
						py: "2em",
						bgcolor: "var(--c-bg-color)",
					}}
					noValidate
					component="form"
					onSubmit={handleSubmit}>
					<Box className="grid lg:grid-cols-2 gap-4   m-auto">
						<FormControl className="w-full border-none lg:mt-5">
							<SelectInput
								{...{
									className: "w-full bg-white ",
									value: values.title,
									name: "title",
									label: "Title",
									handleChange,
									handleBlur,
									handleFocus,
									error: errors.title && touched.title,
									helperText: errors.title,
									options: ["Dr", "Mr", "Mrs", "Miss", "Prof.", "Chief"],
								}}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="firstName"
								label="First Name"
								name="firstName"
								value={values.firstName}
								required
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.firstName && touched.firstName}
								helperText={
									errors.firstName && touched.firstName ? errors.firstName : ""
								}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="lastName"
								label="Last Name"
								name="lastName"
								value={values.lastName}
								required
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.lastName && touched.lastName}
								helperText={
									errors.lastName && touched.lastName ? errors.lastName : ""
								}
							/>
						</FormControl>

						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="emailAddress"
								label="Email Address"
								name="emailAddress"
								value={values.emailAddress}
								required
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.emailAddress && touched.emailAddress}
								helperText={
									errors.emailAddress && touched.emailAddress
										? errors.emailAddress
										: ""
								}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<PhoneNumberInput
								{...{
									phoneNo: values.phoneNumber,
									setPhoneNo: (val) =>
										setValues({ ...values, phoneNumber: val }),
									error:
										errors.phoneNumber && touched.phoneNumber
											? errors.phoneNumber
											: "",
									onFocus: handleFocus,
									onBlur: handleBlur,
								}}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="occupation"
								label="Company/Organisation/Institution"
								name="occupation"
								value={values.occupation}
								required
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.occupation && touched.occupation}
								helperText={
									errors.occupation && touched.occupation
										? errors.occupation
										: ""
								}
							/>
						</FormControl>

						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="address"
								label="Address"
								name="address"
								value={values.address}
								required
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.address && touched.address}
								helperText={
									errors.address && touched.address ? errors.address : ""
								}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<SelectInput
								{...{
									className: "w-full bg-white ",
									value: values.country,
									name: "country",
									label: "Country",
									handleChange,
									handleBlur,
									handleFocus,
									error: errors.country && touched.country,
									helperText: errors.country,
									options: countries,
								}}
							/>
						</FormControl>
						<FormControl className="w-full border-none lg:mt-5">
							<SelectInput
								{...{
									className: "w-full bg-white ",
									value: values.state,
									name: "state",
									label: "State",
									handleChange,
									handleBlur,
									handleFocus,
									error: errors.state && touched.state,
									helperText: errors.state,
									options: states,
								}}
							/>
						</FormControl>

						<FormControl className="w-full border-none lg:mt-5">
							<TextField
								className="w-full bg-white"
								id="vcnNumber"
								label="VCN Number"
								name="vcnNumber"
								value={values.vcnNumber}
								onFocus={handleFocus}
								onChange={handleChange}
								onBlur={handleBlur}
								error={errors.vcnNumber && touched.vcnNumber}
								helperText={
									errors.vcnNumber && touched.vcnNumber ? errors.vcnNumber : ""
								}
							/>
						</FormControl>

						<FormControl className="w-full border-none lg:mt-5">
							<SelectInput
								{...{
									className: "w-full bg-white",
									value: values.specialization,
									name: "specialization",
									label: "Field of Specialization & Practice",
									handleChange,
									handleBlur,
									required: false,
									handleFocus,
									error: errors.specialization && touched.specialization,
									helperText: errors.specialization,
									options: [
										"Small Animal Medicine & Surgery",
										"Large Animal Practice",
										"Equine Practice",
										"Poultry Practice",
										"Pharmacology & Toxicology",
										"Public Health & Preventive",
										"Medicine",
										"Veterinary Parasitology & Entomology",
										"Wild & Exotic Animal Practice",
										"Theriogenology",
									],
								}}
							/>
						</FormControl>
					</Box>
					<FormControl
						required
						error={errors.membershipType}
						component="fieldset"
						className="mb-5"
						variant="standard">
						<Typography className="text-[400] text-xl mb-3 mt-8 ml-3 text-[#040316]">
							<span className="pb-0 border-b-2 border-b-[#43a843]">
								Participation
							</span>{" "}
							Category
						</Typography>
						<RadioGroup
							aria-labelledby="membershipType"
							value={values.membershipType}
							name="membershipType">
							<FormControlLabel
								value="NVMA Members"
								onChange={e=>{setRegType('Early Bird');setValues({...values, membershipPrice: 20000});handleChange(e);}}
								control={<Radio color="success" />}
								label="NVMA Members	"
							/>
							{values.membershipType === "NVMA Members" && (
								<div className="flex items-center">
									<div className="flex my-2 mr-3">
										<MoodIcon color="success" className="mr-2" />
										<p>Early Bird</p>
									</div>
									<div className="flex">
										<p className="sm:mr-2 mr-1 font-bold">NGN</p>
										<p>20,000</p>
									</div>
								</div>
							)}
							<FormControlLabel
								value="Non Members"
								onChange={e=>{setRegType('Late');setValues({...values, membershipPrice: 40000});handleChange(e);}}
								control={<Radio color="success" />}
								label="Non Members"
							/>
							{values.membershipType === "Non Members" && (
								<div className="flex items-center">
									<div className="flex my-2 mr-3">
										<SentimentSatisfiedIcon color="warning" className="mr-2" />
										<p>Late</p>
									</div>
									<div className="flex">
										<p className="sm:mr-2 mr-1 font-bold">NGN</p>
										<p>40,000</p>
									</div>
								</div>
							)}
							<FormControlLabel
								value="Student Veterinarians"
								onChange={e=>{setRegType('Onsite');setValues({...values, membershipPrice: 5000});handleChange(e);}}
								control={<Radio color="success" />}
								label="Student Veterinarians"
							/>
							{values.membershipType === "Student Veterinarians" && (
								<div className="flex items-center">
									<div className="flex my-2 mr-3">
										<SentimentVeryDissatisfiedIcon
											color="error"
											className="mr-2"
										/>
										<p>Onsite</p>
									</div>
									<div className="flex">
										<p className="sm:mr-2 mr-1 font-bold">NGN</p>
										<p>5,000</p>
									</div>
								</div>
							)}
							<FormControlLabel
								value="International Participants"
								onChange={e=>{setRegType('Onsite'); setValues({...values, membershipPrice: 100}); handleChange(e);}}
								control={<Radio color="success" />}
								label="International Participants"
							/>
							{values.membershipType === "International Participants" && (
								<div className="flex items-center">
									<div className="flex my-2 mr-3">
										<DateRangeIcon color="" className="mr-2" />
										<p className="mr-">Apr. 15 - Aug. 13</p>
									</div>
									<div className="flex">
										<p className="sm:mr-2 mr-1 font-bold">USD</p>
										<p>100</p>
									</div>
								</div>
							)}
						</RadioGroup>
						{errors.membershipType && (
							<FormHelperText
								className="text-red-500 bg-white pt-1 text-[0.75rem] px-[14px] leading-[1.66] font-normal"
								color="error">
								{errors.membershipType}
							</FormHelperText>
						)}
					</FormControl>

					<Box className="flex justify-center  m-auto">
						<LoadingButton
							onClick={(_) => navigate(-1)}
							className="my-10 w-1/2 rounded-[10px] bg-[#333] hover:bg-[black] self-end shadow-none normal-case mr-5"
							sx={{
								".MuiLoadingButton-loadingIndicatorCenter": { color: "white" },
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
			</div>
			<Footer />
		</HomeLayout>
	);
};

export default RegistrationForm;
