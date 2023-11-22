import React, { useMemo, useState } from 'react';
import HomeLayout from '../../layouts/Home';
import Footer from '../../components/others/Footer';
import { InvmaBrand } from '../../utils/icons.utils';
import Box from '@mui/material/Box';
import { FormControl } from '@mui/base';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, FormControlLabel, FormHelperText,  Radio, RadioGroup, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { getAuthData } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { vcreateMember } from '../../utils/validators';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SailingIcon from '@mui/icons-material/Sailing';
import { getAmount } from '../../utils/helper';
import { PaystackButton } from "react-paystack";
import Alert from '../../utils/alert';
import config from '../../utils/config';

const Summary = () => {
const navigate = useNavigate(),
[loading, setLoading] = useState(false),
dispatch = useDispatch(),
{ state } = useLocation(),
{ model } = useSelector(getAuthData),
{
	values,
	handleChange,
	handleSubmit,
	setValues,
	errors,
} = useFormik({
	initialValues: model,
	onSubmit: async  (payload) => {
		setLoading(true);
				setTimeout(() => {
					setLoading(false);
					navigate("/registration/form/summary", {state: {...payload}});
				}, 2000);
	},
});

const totalAmount = useMemo(() => (state?.tourPrice || 0) + (state?.membershipPrice || 0), [])

const paymentMetadata = {
 email: state?.emailAddress,
 amount: totalAmount + "00",
 metadata: {
  name: state?.firstName +" "+ state?.lastName,
  phone: state?.phoneNumber,
 },
 className:
  "bg-[#43a843]  text-white py-3 sm:ml-5 ml-0 my-10 bg-[var(--c-primary-0)] hover:bg-[var(--c-primary-1)] w-1/2 self-end shadow-none normal-case rounded-[10px] leading-tight",
 publicKey: config.paystack_public_key,
 text: "Pay Now",
 onSuccess: (e) => {
  if (e.message === "Approved") {
   Alert({ type: "info", message: "Verifying payment...", timer: 10000 });

   setTimeout(()=> {
    Alert({ type: "success", message: "Payment and registration successful", cb: _=> navigate('/') });
   }, 1000)
   // const payload = getOrderPayload(e.reference);
   // OrderAction.placeOrder(payload).then(({ success, data }) => {
   //  if (success) {
   //   Alert({
   //    type: "success",
   //    message: "Payment verified Successfully.",
   //   });
   //   setAddresses((state) => ({
   //    ...state,
   //    checkedOut: true,
   //    choose: false,
   //    order: data,
   //   }));
   //   Storage.set(`cart/${userId}`, JSON.stringify([]));
   //  }
   // });
 
  }
 },
 onClose: () =>
  Alert({ type: "error", message: "Transaction was cancelled" }),
};

 return (
  <HomeLayout>
   <header className="py-5 px-10" >
						<div className="flex justify-center items-center w-full">
							<div className="text-center">
								<div className="flex justify-center">
								<img src={InvmaBrand} alt="logo" className="w-[75%] lg:mb-5 mb-4" />
								</div>
								<h1 className="text-[green] lg:text-5xl md:text-5xl sm:text-4xl text-3xl">
								Summary
								</h1>
        </div>
        </div>
        </header>
   
   <hr />
			<div className='py-20 lg:px-[20%] px-[5%] bg-[#fbfafa]' style={{borderTopLeftRadius: '100'}}>
			<Box className="text-[var(--c-dark-1)] flex">
              <span className='flex items-center cursor-pointer' onClick={(_) => navigate(-1)}>
														<ArrowBackIcon
                  className="mx-2"
                  fontSize="small"
              />
              <Typography className="text-[400] text-[16px] ">Go back</Typography>
														</span>
          </Box>
				
				<section>

				<h2 className='text-lg  md:text-left text-center font-bold mt-10'><span className='border-b-2 border-[#43a843]'>Personal</span> Information</h2>
				<hr />
    <div className="flex mt-5 flex-wrap">
    <strong className='block mr-5'>Name:</strong>
     <p className='text-[#555]'>{state?.firstName} {state?.lastName}</p>
    </div>
    <div className="flex my-3 flex-wrap">
    <strong className='block mr-5'>Email:</strong>
     <p className='text-[#555]'>{state?.emailAddress}</p>
    </div> 
    <div className="flex my-3 flex-wrap">
    <strong className='block mr-5'>Participation type:</strong>
     <p className='text-[#555]'>{state?.membershipType}</p>
    </div>
    <div className="flex my-3 flex-wrap">
    <strong className='block mr-5'>Tour:</strong>
     <p className='text-[#555]'>{state?.tourAndExcursion || 'Not Selected'}</p>
    </div>

    <h2 className='text-lg  md:text-left text-center font-bold mt-10'><span className='border-b-2 border-[#43a843]'>Payment</span> Information</h2>
				<hr /> 
    <div className="flex my-3">
    <strong className='block mr-5'>Participation Price:</strong>
     <p className='text-[#555]'>NGN {getAmount(state?.membershipPrice)}</p>
    </div> 
    <div className="flex my-3">
    <strong className='block mr-5'>Tour Price:</strong>
     <p className='text-[#555]'> NGN {getAmount(state?.tourPrice)}</p>
    </div> 
    <div className="flex my-3">
    <strong className='block mr-5'>Subtotal:</strong>
     <p className='text-[#555]'>NGN {getAmount(state?.membershipPrice)} + {getAmount(state?.tourPrice)}</p>
    </div> 
    <div className="flex my-3">
    <strong className='block mr-5'>Total:</strong>
     <p className='text-[#555]'>NGN {getAmount(totalAmount)}</p>
    </div> 
    </section>

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

       <PaystackButton {...paymentMetadata} />
						</Box>
    </div>
    <Footer />
    </HomeLayout>
)
 }
 export default Summary;