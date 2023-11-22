import React from 'react';
// import { IBrandBlue } from '../../utils/icons.utils';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setCurrentScreen } from '../../features/auth/authSlice';
import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';

const Navbar = () => {
 
 const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentScreen } = useSelector(getAuthData)
  const dispatch = useDispatch(),
  { state } = useLocation();
  const staticClass = "md:w-[100%] w-[100%] m-auto text-[var(--c-text)] bg-transparent pt-4 pl-3 md:flex md:justify-between fixed z-40";
  const scrolledClass = "hidden";


  React.useEffect(() => {
   state && dispatch(setCurrentScreen(state))
   if(state === 'login') setActiveTab(3)
   else if(state === 'home-page') setActiveTab(4)
  }, [state])

  React.useEffect(() => {
    if(currentScreen === 'login') setActiveTab(3)
    else if(currentScreen === 'home-page') setActiveTab(4)
   }, [currentScreen])

  React.useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const tabs = [
   { name: "Solution", link: '/', index: 0 },
   { name: "About Us", link: '/', index: 1 },
   { name: "Contact Us", link: '/', index: 2 },
  //  { name: "Login", link: '/auth', index: 3, state: 'login'},
  // { name: "Sign Up", link: "/auth", index: 4, state: 'home-page' },
 ];

 const tabsTwo = [
  { name: "Solution", link: '/', index: 0 },
  { name: "About Us", link: '/', index: 1 },
  { name: "Contact Us", link: '/', index: 2 },
  { name: "Login", link: '/auth', index: 3, state: 'login'},
  { name: "Sign Up", link: "/auth", index: 4, state: 'home-page' },
];

  const handleToggleMenu = (toggle) => {
    setShowMenu(toggle !== undefined ? toggle : !showMenu);
  };
 useEffect(() => {
  const currentTab = tabs.find((tab) => tab.link === location.pathname);
  setActiveTab(currentTab?.index || 0);
}, [location.pathname]);

const handleTabClick = (index) => {
  setActiveTab(index);
};


 return (
  <div className=''>
   <nav className={scrollPosition > 0 ? scrolledClass : staticClass}>
        <div className="w-[95%] mx-auto py-2 flex  justify-between md:justify-between   ">
          <Link to={'/'}>
          {/* <img className="text-xl font-bold " src={IBrandBlue} alt="" /> */}
          </Link>
          <div className="md:hidden mr-3">
            <button
              onClick={() => handleToggleMenu()}
              type="button"
              className="text-gray-600 hover:text-gray-700 focus:outline-none focus:text-gray-800"
            >
              {showMenu ? (
                <AiOutlineClose className="w-[30px] h-[30px]" />
              ) : (
                <AiOutlineMenu className="w-[30px] h-[30px]" />
              )}
            </button>
          </div>
          <div className="hidden md:block md:pl-0 md:pb-0">
            {tabs.map((tab) => (
              <Link
                key={tab.index}
                to={tab.link}
                state={tab.state}
                onClick={() => handleTabClick(tab.index)}
                className={`block mt-3 md:inline-block md:mt-0 md:ml-8 ${
                  activeTab === tab.index
                    ? "font-bold lg:text-[20px] md:text-[16px]"
                    : "font-normal lg:text-[20px] md:text-[16px]"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <Box className="mb-3 hidden md:inline-block">
          <Button
            LinkComponent={Link}
            className=" lg:h-[100%] md:h-[30px] rounded-[8px] bg-white border-2 hover:bg-gray-100 text-[var(--c-primary-0)] shadow-none text-center w-[80px] mr-4"
            sx={{".MuiLoadingButton-loadingIndicatorCenter": {color: 'var(--c-bg-color) !important'}}}
            size="small"
            type="submit"
            variant="contained"
            fullWidth
            to='/auth'
            {...{state: 'login'}}
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            className=" rounded-[8px] bg-[var(--c-primary-0)] hover:bg-[var(--c-primary-1)] shadow-none text-center lg:h-[100%] md:h-[30px] w-[80px] "
            sx={{".MuiLoadingButton-loadingIndicatorCenter": {color: 'var(--c-bg-color) !important'}}}
            size="small"
            type="submit"
            variant="contained"
            fullWidth
            to='/auth'
            {...{state: 'home-page'}}
          >
            Sign Up
          </Button>
        </Box>
        </div>
        {showMenu && (
          <div className="md:hidden pb-4  flex gap-3 text-center">
            {tabsTwo.map((tab) => (
              <Link
                key={tab.index}
                to={tab.link}
                onClick={() => handleTabClick(tab.index)}
                className={`block md:inline-block md:mt-0 md:ml-6 ${
                  activeTab === tab.index
                    ? "font-bold text-[13px]"
                    : "font-normal text-[13px]"
                }`}
                {...{state: tab?.index === 3 ? 'login' : tab?.index === 4 ? 'home-page' : null}}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
  </div>
 );
}

export default Navbar;
