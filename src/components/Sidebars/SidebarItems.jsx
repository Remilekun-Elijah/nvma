/* eslint-disable react-hooks/exhaustive-deps */
import {
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getRole } from "../../utils/helper";

const SidebarItems = ({ link }) => {
	const { pathname } = useLocation()
	const [open, setOpen] = React.useState(false),
	dropdownActive = link?.dropdown?.find(({ url }) =>
	url === pathname
		? true
		: pathname.indexOf(url) > -1
		? true
		: false,
),
activeLink = pathname === link.url || dropdownActive;

	React.useEffect(() => {
		setOpen(dropdownActive ? true : false);
	},[])
	return (
		<>
		{	(link.authorizedUsers.includes(getRole()) || link.authorizedUsers.includes('all')) && <ListItem
				disablePadding
				sx={{
     mt: '.5em',
					"&: hover": {
						color: "var(--c-primary-0)",
						
						backgroundColor: "var(--text-bg)",
					},
					background: (open || activeLink ) && "var(--text-bg)",
					color: (open || activeLink) ? "var(--c-primary-0)" : "var(--c-dark-1)",
				}}
				onClick={(_) => setOpen(!open)}>
				<ListItemButton component={link?.url && Link} to={link?.url}>
					<ListItemIcon>{link.icon}</ListItemIcon>
					<ListItemText
						disableTypography
						primary={<Typography sx={{fontFamily: 'SofiaPro',}}>{link.name}</Typography>}
					/>
					{link?.dropdown &&
						(open ? <KeyboardArrowUpIcon /> : <ExpandMoreOutlinedIcon />)}
				</ListItemButton>
			</ListItem>}

			{link?.dropdown && (
				<Collapse in={open} timeout="auto" sx={{ background: "#fff" }}>
						{link?.dropdown?.map((list, index) => {
							const isActive = list.url === pathname
								? true
								: pathname.indexOf(list.url) > -1
								? true : false;

					return (<List key={index} sx={{color: isActive ? 'var(--c-primary-0)':'var(--c-dark-1)', my: '0px', py:'3px', fontSize: '14px'}}>
							<ListItemButton component={Link} to={list.url} key={index}>
								<ListItemIcon></ListItemIcon>
								<ListItemText
								sx={{my: '0px'}}
									disableTypography
									primary={<Typography sx={{fontFamily: 'SofiaPro',}}>{list.name}</Typography>}
								/>
							</ListItemButton>
					</List>)
})}
				</Collapse>
			)}


		</>
	);
};

export default SidebarItems;
