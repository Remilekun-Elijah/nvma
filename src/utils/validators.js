import * as Yup from "yup";

const lettersRegex = /^[A-Za-z\s{2,}]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/gi;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/; 


const emailAddress =  Yup.string().required("Email Address is required").email("Email Address is invalid").matches(emailRegex, "Email Address is invalid"),
 phoneNumber = Yup.string().required("Phone Number is required").min(11, "Phone Number must be at least 11 characters").max(15, "Phone Number must be less than 15 characters"),
 fullName = Yup.string().required("First Name is required").min(3,	"First Name must be at least 3 characters").max(30, "First Name must be less than 30 characters").matches(lettersRegex, "cannot contain numbers and special characters"),
 firstName = Yup.string().required("First Name is required").min(3,	"First Name must be at least 3 characters").max(30, "First Name must be less than 30 characters").matches(lettersRegex, "cannot contain numbers and special characters"),
 lastName = Yup.string().required("Last Name is required").min(3,	"Last Name must be at least 3 characters").max(30, "Last Name must be less than 30 characters").matches(lettersRegex, "cannot contain numbers and special characters"),
 companyName = Yup.string().required("Company Name is required").min(3,	"Company Name Name must be at least 3 characters").max(30, "Company Name Name must be less than 30 characters").matches(lettersRegex, "cannot contain numbers and special characters"),
 password = Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long').max(16, 'Password must be less than 16 characters')


 export const vcreateMember = Yup.object({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
country: Yup.string(),
state: Yup.string(),
address: Yup.string('Address is required'),
occupation: Yup.string('Company/Organisation/Institution is required'),
title: Yup.string(),
specialization: Yup.string(),
vcnNumber: Yup.number(),
membershipPrice: Yup.string(),
membershipType: Yup.string().required('Participation Category is required'),
tourAndExcursion: Yup.string(),
 })
 /*
 firstName: "",
 lastName: "",
 emailAddress: "",
 phoneNumber: "",
 country: "",
 state: "",
 address: "",
 specialization: "",
 occupation: "",
 title: "",
 vcnNumber: "",
 */