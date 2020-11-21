import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Grid, AppBar, Toolbar,CssBaseline, Typography, Divider, IconButton, Tooltip,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {useHistory} from 'react-router-dom';
import Notifications from "./Notifications/Notifications.component";
import ProfileButton from "./ProfileButton/ProfileButton.component";
import SideBar from "./SideBar/SideBar.component";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    mainTitle: {
        flex: '1',
    },
}));


function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const history = useHistory();
    
    const handleDrawerOpen = value => {
        setOpen(!value);
    };
    
    const handleMenuItem = value => {
        history.push(value);
        setOpen(false);
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="default" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                <Toolbar>
                    <Tooltip title='Menu'>
                    <IconButton color="inherit" aria-label="open drawer" onClick={() => handleDrawerOpen(open)}
                        edge="start" className={clsx(classes.menuButton, {[classes.hide]: open,})}>
                        <MenuIcon />
                    </IconButton>
                    </Tooltip>
                    <Typography variant="h6" noWrap className={classes.mainTitle}>Taskr</Typography>
                    <div className={classes.grow} />
                    <div>
                        <Grid container direction="row" alignItems='center'>
                            <Notifications />
                            <ProfileButton handleMenuItem={handleMenuItem}/>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open,})}
                classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open,}),}}>
                <div className={classes.toolbar}>
                    <IconButton onClick={() => handleDrawerOpen(open)}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <SideBar handleMenuItem={handleMenuItem} />
            </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                </main>
        </div>
    );
}

export default NavBar;
