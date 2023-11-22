import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import HomeLayout from "../layouts/Home";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardComp from "../components/CardComp";

const ViewImage = () => {
  const navigate = useNavigate(),
  { state } = useLocation();
  return (
    <HomeLayout {...{ title: "Hospital" }}>
      <Box className="flex  mt-2 text-[var(--c-dark-1)]">
        <ArrowBackIcon
          onClick={(_) => navigate(-1)}
          className=" mr-2 cursor-pointer"
          fontSize="small"
        />
        <Typography className="text-[400] text-[16px] ">Go back</Typography>
      </Box>
      <Typography className="text-[400] text-xl mt-8 ml-1 text-[#040316]">
      {state?.name} Images
      </Typography>

      <Box
        className="py-8 mt-8 bg-[var(--c-bg-color)] w-100% rounded-lg"
        sx={{ p: 0 }}
      >
        <CardComp
          className={
            "bg-[#FFFFFF]  w-[95%] min-h-[550px] mb-8 md:p-2 p-3 border-none rounded-lg shadow-none m-auto grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 grid-flow-row gap-4"
          }
        >
				{state?.hospitalImages?.length > 0  &&
					state?.hospitalImages?.map?.((imageUrl, i) => {
						return (
							<Box className=" m-auto my-5 static" key={i}>
									{/* <ClearIcon style={{color: 'black', top: '10px'}} className='cursor-pointer z-10 absolute'/> */}
								<a href={imageUrl}>
                <img
									alt="Selected Image "
									src={imageUrl}
									className="w-[259px] h-[147px]  rounded-[15px]"
								/>
                </a>
                <Typography className="text-center mt-4 font-bold">
                Sick Bay
                </Typography>
							</Box>
						);
					})}
        </CardComp>
      </Box>
    </HomeLayout>
  );
};

export default ViewImage;
