import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Menu, MenuItem,  Paper, Grid, Avatar, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Tooltip,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';
import styles from './NavBar.module.css';

import {useHistory} from 'react-router-dom';
import profileImage from '../../Images/profile.jpg';
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
        padding: theme.spacing(3),
    },
    mainTitle: {
        flex: '1',
    }
}));


function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [profileDropdown, setProfileDropDown] = useState(false);
    const [notificationDropdown, setNotificationDropDown] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const handleProfileDropdown = value => {
        setProfileDropDown(!value);
    }
    
    const handleNotificationDropdown = value => {
        setNotificationDropDown(!value);
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="default" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                <Toolbar>
                    <Tooltip title='Menu'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                    </Tooltip>
                    <Typography variant="h6" noWrap className={classes.mainTitle}>Taskr</Typography>
                    <div className={classes.grow} />
                    <div>
                        <Grid container direction="row">
                        <Tooltip title='Notifications'>
                        <IconButton color="inherit" onClick={() => handleNotificationDropdown(notificationDropdown)}>
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </IconButton>
                        </Tooltip>
                            <Menu id="notification-dropdown" anchorOrigin={{vertical: 'top', horizontal: 1250,}}
                                  keepMounted
                                  transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  open={notificationDropdown}
                                  onClose={() => handleNotificationDropdown(notificationDropdown)}>
                                <MenuItem>Notification 1</MenuItem>
                                <Divider />
                                <MenuItem>Notification 2</MenuItem>
                            </Menu>
                        <Tooltip title='Profile'>
                         <Paper elevation={0} className={styles.profileContainer}>
                             <Grid container direction="row" alignItems="center">
                                <IconButton onClick={() => handleProfileDropdown(profileDropdown)}>
                                    <Avatar src={profileImage} />
                                    <Typography variant="h6">Nick Morgan</Typography>
                                </IconButton>
                             </Grid>
                        </Paper>
                    </Tooltip>
                            <Menu id="profile-dropdown" anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={profileDropdown}
                                onClose={() => handleProfileDropdown(profileDropdown)}>
                                <MenuItem onClick={() => handleProfileDropdown(profileDropdown)}>Profile</MenuItem>
                                <Divider />
                                <MenuItem onClick={() => handleProfileDropdown(profileDropdown)}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push("/")}>
                        <Tooltip title='Dashboard'>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/tasks")}>
                        <Tooltip title='Tasks'>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="Tasks" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/analytics")}>
                        <Tooltip title='Analytics'>
                        <ListItemIcon>
                            <InsertChartIcon />
                        </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push("/user-profile")}>
                        <Tooltip title='User Profile'>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="User Profile" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/help")}>
                        <Tooltip title='Help'>
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                        </Tooltip>
                        <ListItemText primary="Help" />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />

            </main>
        </div>
    );
}

export default NavBar;
