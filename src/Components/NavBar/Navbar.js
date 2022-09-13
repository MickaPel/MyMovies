import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    let navigate =  useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            // sx={{backgroundColor: "#181818", color: "#b0e0a8"}}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            // style={{backgroundColor: "#181818"}}
        >
            <MenuItem onClick={handleMenuClose}>Inscription</MenuItem>
            <MenuItem onClick={handleMenuClose}>Connexion</MenuItem>
        </Menu>
    );

    //Drawer
    const [openDrawer, setOpenDrawer] = useState(false);

    // const toggleDrawer = () => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setOpenDrawer(true);
    // };

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     setOpenDrawer(false);
        //         }
                setOpenDrawer(false);
    };

    const listMenu = [
        {
            text: "Home",
            // icon: <HomeIcon color="primary" style={{fill: "#ffcd3c"}} />,
            onClick: () => navigate("/")
        },
        {
            text: "Categories",
            // icon: <StarIcon color="primary" style={{fill: "#ffcd3c"}} />,
            onClick: () => navigate("/categories")
        },
        // {
        //     text: "Voyages Temporels",
        //     icon: <HourglassEmptyIcon color="primary" style={{fill: "#ffcd3c"}} />,
        //     onClick: () => history.push("/time-travel")
        // },
        {
            text: "Profile",
            // icon: <AccountCircleIcon style={{fill: "#ffcd3c"}}/>,
            onClick: () => navigate("/profile"),
        }
    ];


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#181818", color: "#b0e0a8" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='left'
                        open={openDrawer}
                        onClose={handleDrawerClose}
                        transitionDuration={400}
                        sx={{color: "#181818"}}
                    >
                        <Box sx={{
                                display: 'flex',
                                backgroundColor: "#181818",
                                flexWrap: 'wrap',
                                height: '100%',
                                width: 150,
                                color: "#f0f69f"
                            }}>
                                <List>
                                {listMenu.map((item, index) => {
                                        const { text, icon, onClick } = item;
                                        return (
                                    <ListItem button key={text} onClick={onClick}>
                                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                        <ListItemText primary={text} />
                                    </ListItem>
                                    )})}
                                </List>
                        </Box>
                    </Drawer>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MyMovies
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}