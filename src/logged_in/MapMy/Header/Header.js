import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Drawer, 
    AppBar, 
    Toolbar, 
    List, 
    Divider, 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import RoomIcon from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import background from "./appBarBackground.png";
import logo from "./Logo.svg";
import navbckgr from "./NavBackgr.svg";
import { useAuth } from "../../../context/auth";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        background: `url(${background})`,
        backgroundPosition: theme.spacing(3.5),
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
        borderBottom: '2px solid #2B256C',
        height: theme.spacing(9),
    },
    menuButton: {
        background: 'white',
        padding: theme.spacing(2.8),
        ':hover': {
            background: '#fff'
        }
    },
    menuCloseButton: {
        display: 'absolute', 
        top: theme.spacing(1.5), 
        left: '100%', 
        zIndex: 1201
    },
    logo: {
        margin: 'auto'
    },
    space: {
        width: theme.spacing(7)
    },
    nav: {
        color: theme.palette.primary.main,
        '& .MuiListItem-root.Mui-selected': {
            background: 'linear-gradient(90deg, rgba(43, 37, 108, 0.24) 0%, rgba(34, 152, 177, 0) 100%)',
            borderLeft: '2px solid #2B256C'
        },
        '& .MuiListItemIcon-root': {
            minWidth: theme.spacing(6),
            marginLeft: theme.spacing(2)
        },
        '& .MuiListItemText-primary': {
            fontSize: '1em'
        }
    },
    navIcon: {
        width: theme.spacing(2.5)
    },
    drawer: {
        '& .MuiBackdrop-root': {
            background: 'linear-gradient(180deg, rgba(43, 37, 108, 0.24) 0.09%, rgba(34, 152, 177, 0.24) 100.09%)',
            backdropFilter: 'blur(1px)'
        }
    },
    drawerHeader: {
        marginBottom: theme.spacing(5),
        '&::before': {
            content: '"Menu"',
            color: theme.palette.primary.main,
            fontSize: '1em',
            fontWeight: 'bold',
            display: 'block',
            position: 'absolute',
            padding: theme.spacing(3.5),
            left: theme.spacing(1),
            height: '100%',
            width: '100%',
            background: `url(${logo})`,
            backgroundPosition: '82% 3%',
            backgroundRepeat: 'no-repeat'
        }
    },
    drawerPaper: {
        overflowY: 'visible',
        width: '65%',
        borderBottomRightRadius: '50px',
        '&::before': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: '100%',
            height: theme.spacing(8.75),
            backgroundColor: 'white',
            width: theme.spacing(7.5),
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            boxShadow: '6px 0px 11px -5px rgba(0,0,0,0.5)' 
        },
        '&::after': {
            content: '" "',
            height: '100%',
            width: '100%',
            background: `url(${navbckgr})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70vh 70vw'
        }
    },
    noDecoration: {
        textDecoration: "none !important",
        color: theme.palette.primary.main,
    },
}));

function Header(props) {
    const { setAuthTokens } = useAuth();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { selectedTab } = props;
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function logOut() {
        setAuthTokens(false);
    }
    
    return (
        <React.Fragment>
            <AppBar
                position="relative"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Toolbar
                        className={classes.logo}
                    >
                        <img src={logo} alt="logo" />
                    </Toolbar>
                    <Toolbar
                        className={classes.space}
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton 
                        onClick={handleDrawerClose}
                        className={classes.menuCloseButton}
                        color="primary"
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List className={classes.nav}>
                    <Link
                        to="/"
                        className={classes.noDecoration}
                        onClick={handleDrawerClose}
                    >
                        <ListItem 
                            button
                            selected={selectedTab === 'Point'}
                        >
                            <ListItemIcon><RoomIcon color='primary'/></ListItemIcon>
                            <ListItemText primary='My Points' />
                        </ListItem>
                    </Link>
                    <Link
                        to="/map"
                        className={classes.noDecoration}
                        onClick={handleDrawerClose}
                    >
                        <ListItem 
                            button 
                            selected={selectedTab === 'Map'}
                        >
                            <ListItemIcon><MapIcon  color='primary'/></ListItemIcon>
                            <ListItemText primary='Map' />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem 
                        button
                        className={classes.nav}
                        onClick={logOut}
                    >
                        <ListItemIcon><PowerSettingsNewIcon color='primary'/></ListItemIcon>
                        <ListItemText primary='Log out' />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default Header;