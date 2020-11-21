import React, {useState} from 'react';
import {
    Avatar,
    Container,
    Divider,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Popover,
    Tooltip,
    Typography
} from "@material-ui/core";
import styles from "./ProfileButton.module.css";
import profileImage from "../../../Images/profile.jpg";


const ProfileButton = ({handleMenuItem}) => {
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
            <Tooltip title='Profile'>
                <Paper elevation={0} className={styles.profileContainer}>
                    <Grid container direction="row" alignItems="center">
                        <IconButton onClick={handleClick}>
                            <Avatar src={profileImage} />
                            <Typography variant="h6">Nick Morgan</Typography>
                        </IconButton>
                    </Grid>
                </Paper>
            </Tooltip>
            <Popover
                id={id}
                open={openBox}
                anchorEl={anchorEl}
                onClose={handleClick}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className={styles.notificationPop}>
                <Container>
                    <MenuItem onClick={() => handleMenuItem('/user-profile')}>Profile</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClick}>Logout</MenuItem>
                </Container>
            </Popover>
        </div>
    );
};

export default ProfileButton;
