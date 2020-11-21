import React from 'react';
import {Grid, Typography, Divider, Container, Button} from "@material-ui/core";
import styles from './NotificationModule.module.css';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';

const NotificationModule = () => {
    
    const handleClick = e => {
        console.log(e);
    }
    
    
    return (
        <Container className={styles.container}>
            <Grid container direction='column'>
                <Button onClick={handleClick} className={styles.button} disableRipple={true}>
                    <Grid container direction='row'>
                        <LibraryAddOutlinedIcon className={styles.logo} />
                        <Typography variant={"body1"} className={styles.text}>Interesting Text.....</Typography>
                        <Divider />
                    </Grid>
                </Button>
                <Button onClick={handleClick} className={styles.button} disableRipple={true}>
                    <Grid container direction='row'>
                        <LibraryAddOutlinedIcon className={styles.logo} />
                        <Typography variant={"body1"} className={styles.text}>Interesting Text.....</Typography>
                        <Divider />
                    </Grid>
                </Button>
                <Button onClick={handleClick} className={styles.button} disableRipple={true}>
                    <Grid container direction='row'>
                        <LibraryAddOutlinedIcon className={styles.logo} />
                        <Typography variant={"body1"} className={styles.text}>Interesting Text.....</Typography>
                        <Divider />
                    </Grid>
                </Button>
            </Grid>
        </Container>
        
    );
};

export default NotificationModule;
