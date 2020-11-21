import React, {useState} from 'react';
import {IconButton, Popover, Tooltip} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import NotificationModule from "./NotificationModule/NotificationModule.component";

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const openBox = Boolean(anchorEl);
    const id = openBox ? 'simple-popover' : undefined;
    
    const handleClick = (event) => {
        if(anchorEl === null) {
            setAnchorEl(event.currentTarget);
        }
        else {
            setAnchorEl(null);
        }
    }
    
    return (
        <div>
            <Tooltip title='Notifications'>
                <IconButton color="inherit" onClick={handleClick}>
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Popover id={id} open={openBox} anchorEl={anchorEl} onClose={handleClick}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'center',
                     }}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'right',
                     }} >
                <NotificationModule />
            </Popover>
        </div>
    );
};

export default Notifications;
