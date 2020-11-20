import React from 'react';
import {Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import QueueOutlinedIcon from "@material-ui/icons/QueueOutlined";
import styles from "./TopBoxes.module.css";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 30
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        flex: 1
    },
    pos: {
        marginBottom: 12,
    },
});

const TopBoxes = () => {
    const classes = useStyles();
    
    return (
        <div>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>Tasks Created</Typography>
                                <QueueOutlinedIcon />
                            </Grid>
                            <Grid container direction='row'>
                                <Typography variant="h3" component="h2">15</Typography>
                                <Typography variant="subtitle1" className={styles.boxSub}>tasks added</Typography>
                            </Grid>
                        </CardContent>
                        <Grid container direction='row' className={styles.bottomContainer}>
                            <Typography variant="h6" className={styles.boxCount}>+29%</Typography>
                            <Typography variant="subtitle1" className={styles.boxBottom}>in the last 30 days</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>Tasks Pending</Typography>
                                <LibraryBooksOutlinedIcon />
                            </Grid>
                            <Grid container direction='row'>
                                <Typography variant="h3" component="h2">6</Typography>
                                <Typography variant="subtitle1" className={styles.boxSub}>tasks pending</Typography>
                            </Grid>
                        </CardContent>
                        <Grid container direction='row' className={styles.bottomContainer}>
                            <Typography variant="h6" className={styles.boxCount}>+29%</Typography>
                            <Typography variant="subtitle1" className={styles.boxBottom}>in the last 30 days</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>Tasks Complete</Typography>
                                <LibraryAddCheckOutlinedIcon />
                            </Grid>
                            <Grid container direction='row'>
                                <Typography variant="h3" component="h2">50</Typography>
                                <Typography variant="subtitle1" className={styles.boxSub}>completed tasks</Typography>
                            </Grid>
                        </CardContent>
                        <Grid container direction='row' className={styles.bottomContainer}>
                            <Typography variant="h6" className={styles.boxCount}>+29%</Typography>
                            <Typography variant="subtitle1" className={styles.boxBottom}>more than last month</Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>Tasks Removed</Typography>
                                <DeleteOutlinedIcon />
                            </Grid>
                            <Grid container direction='row'>
                                <Typography variant="h3" component="h2">5</Typography>
                                <Typography variant="subtitle1" className={styles.boxSub}>tasks removed</Typography>
                            </Grid>
                        </CardContent>
                        <Grid container direction='row' className={styles.bottomContainer}>
                            <Typography variant="h6" className={styles.boxCount}>+29%</Typography>
                            <Typography variant="subtitle1" className={styles.boxBottom}>in the last 30 days</Typography>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
};

export default TopBoxes;
