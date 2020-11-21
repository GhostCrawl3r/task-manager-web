import React from 'react';
import {Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PersonIcon from "@material-ui/icons/Person";
import HelpIcon from "@material-ui/icons/Help";

const SideBar = ({handleMenuItem}) => {
    return (
        <div>
            <List>
                <ListItem button onClick={() => handleMenuItem('/')} >
                    <Tooltip title='Dashboard'>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => handleMenuItem("/tasks")}>
                    <Tooltip title='Tasks'>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="Tasks" />
                </ListItem>
                <ListItem button onClick={() => handleMenuItem("/analytics")}>
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
                <ListItem button onClick={() => handleMenuItem("/user-profile")}>
                    <Tooltip title='User Profile'>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="User Profile" />
                </ListItem>
                <ListItem button onClick={() => handleMenuItem("/help")}>
                    <Tooltip title='Help'>
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="Help" />
                </ListItem>
            </List>
        </div>
    );
};

export default SideBar;
