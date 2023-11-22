import React from 'react';
import HomeLayout from '../../layouts/Home';
import Footer from '../../components/others/Footer';
import { InvmaBrand } from '../../utils/icons.utils';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useMemo } from 'react';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import { Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { getAmount } from '../../utils/helper';

const Registration = () => {
 const [value, setValue] = React.useState(0);
 const [currency, setCurrency] = React.useState(null);

 const handleChange = (event, newValue) => {
   setValue(newValue);
   console.log(newValue);
 };


 const AntTabs = styled(Tabs)({
   borderBottom: '1px solid #e8e8e8',
   '& .MuiTabs-indicator': {
     backgroundColor: '#1890ff',
   },
 });
 
 const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
   textTransform: 'none',
   minWidth: '30%',
   [theme.breakpoints.up('sm')]: {
     minWidth: 0,
   },
   fontWeight: theme.typography.fontWeightRegular,
   color: 'rgba(0, 0, 0, 0.85)',
   fontFamily: [
     '-apple-system',
     'BlinkMacSystemFont',
     '"Segoe UI"',
     'Roboto',
     '"Helvetica Neue"',
     'Arial',
     'sans-serif',
     '"Apple Color Emoji"',
     '"Segoe UI Emoji"',
     '"Segoe UI Symbol"',
   ].join(','),
   '&:hover': {
     color: '#40a9ff',
     opacity: 1,
   },
   '&.Mui-selected': {
     color: '#1890ff',
     fontWeight: theme.typography.fontWeightMedium,
   },
   '&.Mui-focusVisible': {
     backgroundColor: '#d1eaff',
   },
 }));
 
 function getPrices() {
  switch(value) {
   case 0: return [20000, 25000, 30000];
   case 1: return [30000, 40000, 50000];
   case 2: return [5000, 5000, 5000];
   case 3: return [100, 150, 200];
   default: return []
  }
 }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const prices = useMemo(() => {
  if(value === 3) setCurrency('USD')
  else setCurrency('NGN')
  return getPrices();
 }, [value])

 const steps = [
  {
    label: 'Step One',
    description: "Click on the Proceed To Registration button ",
  },
  {
    label: 'Step Two',
    description:
      'On page 1, enter your details and select your Participation Category, then click NEXT.',
  },
  {
    label: 'Step Three',
    description: "The next page displays the appropriate Registration Fee you are expected to pay as well as the available Tours & Excursions.",
  },
  {
   label: 'Step Four',
   description: "If you will like to participate in any of the Tours & Excursions, select the one that suits you.  If you are not interested in the Tours & Excursions, do not click on any of them.",
 },
 {
  label: 'Step Five',
  description: "Proceed to the Summary page to review your order, then click Pay Now if it looks good.",
},
  
];

const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
   <div className='py-20 lg:px-[20%] px-[5%] bg-[#fbfafa]' style={{borderTopLeftRadius: '100'}}>
   
    {/* Registration */}
   <div className=' text-left leading-7 font-thin'>
    <p className='lg:text-lg text-sm'>The Congress & AGM will attract will attract about 1000 Delegates from a wide variety of Universities, Institutions, Companies, Agencies, and Organizations from within and outside Nigeria.  State and Federal Government Ministries and Agencies will also attend.  Being an AGM Year, attendance will be quite high and the LOC is leaving no stone unturned to ensure a well organized and enjoyable Congress and AGM.</p>
   </div>

   {/* <hr /> */}

<div className="text-left mt-10">

  <h1 className='text-lg  md:text-left text-center font-bold'>Registration Fee Schedule</h1>
  <p className='lg:text-lg'>There are four categories of participants for this Congress and AGM:</p>

</div>


    <Box className='sm:w-full w-[90vw]'>
      <Box >
        <AntTabs variant='scrollable' value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="NVMA Members" />
          <AntTab label="Non-Members" />
          <AntTab label="Student Veterinarians" />
          <AntTab label="International Participants" />  
        </AntTabs>
        <p className='text-left text-lg my-3 '><span className='border-b-2 border-[#43a843]'>Types</span> of registration are as follows:</p>
        <section className='text-left flex flex-wrap gap-10'>
         <div>
         <div className="flex">
        <MoodIcon color="success" className='mr-2'/>
        <p className='mr-5'>Early Bird</p>
         </div>
         <div className="flex my-2">
        <DateRangeIcon color="" className='mr-2'/>
        <p className='mr-'>Apr. 15 - Aug. 13</p>
         </div>
         <div className="flex">
        <p className='mr-2 font-bold'>{currency}</p>
        <p className='mr-'>{getAmount(prices[0])}</p>
         </div>
         </div>

         <div className='mx-'>
         <div className="flex">
        <SentimentSatisfiedIcon color="warning" className='mr-2'/>
        <p className='mr-5'>Late</p>
         </div>
         <div className="flex my-2">
        <DateRangeIcon color="" className='mr-2'/>
        <p className='mr-'>Sep. 1 - Oct. 29</p>
         </div>
         <div className="flex">
        <p className='mr-2 font-bold'>{currency}</p>
        <p className='mr-'>{getAmount(prices[1])}</p>
         </div>
         </div>

         <div className=''>
         <div className="flex">
        <SentimentVeryDissatisfiedIcon color="error" className='mr-2'/>
        <p className='mr-5'>Onsite</p>
         </div>
         <div className="flex my-2">
        <DateRangeIcon color="" className='mr-2'/>
        <p className='mr-'>Oct. 30</p>
         </div>
         <div className="flex">
        <p className='mr-2 font-bold'>{currency}</p>
        <p className='mr-'>{getAmount(prices[2])}</p>
         </div>
         </div>
        </section>
         
         <blockquote className='bg-slate-100 mt-8 py-3 px-2'>
         <p className='text-left'>
						<span className='text-[#555]'>
						 <span className='text-bold text-[#111]'>NB:</span> International Participants are Non-Nigerian Vets and others outside Nigeria.
						</span>
							</p>
         </blockquote>
      </Box>
    </Box>
 
    <h1 className='text-lg  md:text-left text-center font-bold mt-10'>Payment for Registration</h1>
         <p className='lg:text-lg text-left'>Registration and payment for the NVMA EKO 2023 Conference & Exhibition shall be online via the conference website from this page.</p>

         <h1 className='text-lg  md:text-left text-center font-bold mt-10'>How to Register</h1>
         <Box sx={{ maxWidth: 500 }}>
         <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    className='py-2 px-5 bg-blue-800 mr-5 capitalize text-white rounded'
                    color='success'
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                  className='py-2 px-5 bg-[#333] disabled:bg-slate-400 capitalize text-white rounded'
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button 
          className='py-2 px-5 bg-[#000] capitalize text-white rounded'
          onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
      </Box>
   <Link   
        to='/registration/form'
									color="success"
									size="large"
									className="inline-block mt-20 py-2 px-5 bg-[#43a843] capitalize text-white rounded-lg shadow-xl sm:text-lg text-sm"
         >
									Proceed to Registration
								</Link>
   </div>

   <Footer />
  </HomeLayout>
 );
}

export default Registration;
