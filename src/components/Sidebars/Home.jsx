import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import links from '../../utils/linkTree';
import SidebarItems from '../../components/Sidebars/SidebarItems';
import { Button, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, useScrollTrigger } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { loggedInUser } from '../../utils/helper';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const drawerWidth = 340;


export default function HomeSidebar(props) {
  const { children, title, subtitle } = props;
  const [phoneNumberOpen, setMobileOpen] = React.useState(false),
  [scrolled, setScroll] = React.useState(false) ;
  const dispatch = useDispatch(),
  navigate = useNavigate(),
   handleDrawerToggle = () => { 
    setMobileOpen(!phoneNumberOpen);
  }
  const theme = useTheme();

document.addEventListener('scroll', e => {
  const position = window.scrollY;
  if(position > 10) setScroll(true)
  else setScroll(false)
})

  const sidebar = (
    <div>
      <Toolbar>
      <IconButton onClick={handleDrawerToggle}>
          </IconButton>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
            >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
            </Toolbar>
      <div className='sm:mt-20 pl-7'>
      </div>
      <List>
        {links.map((link, index) => {
          return<SidebarItems {...{ link }} key={index} />
            })}
      </List>

    </div>
  );

  
  
  return (
    <Box sx={{ display: 'flex', textAlign: 'center'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? '#fff' : 'transparent',
          color: scrolled ? '#000' : 'white',
          boxShadow: 'none',
          py: '.5em',
          zIndex: 20,
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, }}
          >
            <MenuIcon />
          </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'center', width: '100%' } }}>
            {['Home', 'Contact', 'About'].map((item) => (
              <Button component={Link} to='/' key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))}
          </Box>
      
        </Toolbar>
      </AppBar>


      <Box
        component="nav"
        fontFamily={'SofiaPro'}
        
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={phoneNumberOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on phoneNumber.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {sidebar}
        </Drawer> */}
        
        <Drawer
          variant="temporary"
          sx={{
            // display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open={phoneNumberOpen}
        >
          {sidebar}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}