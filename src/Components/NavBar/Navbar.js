import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useAuthValue } from "../../AuthContext"

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

    //navigation
    let navigate = useNavigate();

    //Drawer
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = (event) => {
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

    //user status
    const { currentUser } = useAuthValue();


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
                        sx={{ color: "#181818" }}
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
                                    )
                                })}
                            </List>
                        </Box>
                    </Drawer>
                    <Typography
                        variant="h6"
                        noWrap
                        color="#b0e0a8"
                        component={Link}
                        to='/'
                        sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' } }}
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
                            aria-haspopup="true"
                            onClick={() => navigate('/profile')}
                        >
                            {currentUser !== null ?
                            <AccountCircle style={{ color: "#3CCF4E" }} />:
                            <AccountCircle style={{ color: "#b0e0a8" }} />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}