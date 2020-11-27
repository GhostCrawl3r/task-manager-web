import React from 'react';
import styles from './Dashboard.module.css';
import {Typography, Divider, Grid, IconButton} from "@material-ui/core";
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';

import LineChartComponent from "../../Components/Dashboard/LineChart/LineChartComponent.component";
import TopBoxes from "../../Components/Dashboard/TopBoxes/TopBoxes.component";
import PieChartCom from "../../Components/Dashboard/PieChart/PieChart.component";
import BottomTray from "../../Components/Dashboard/BottomTray/BottomTray.component";


const Dashboard = () => {
    
    return (
        <div className={styles.container}>
            {/*Title top screen*/}
            <Grid container direction={'row'}>
                <Typography variant='h6' className={styles.mainTitle}>Welcome back, Nick.</Typography>
                <IconButton>
                    <CachedOutlinedIcon />
                </IconButton>
            </Grid>
            <Divider />
            {/*4 top cards*/}
                <TopBoxes/>
            {/*Graphs*/}
            <Grid container direction='row' spacing={2}>
                <Grid container item xs={8}>
                    <LineChartComponent />
                </Grid>
                <Grid container item xs={4}>
                    <PieChartCom />
                </Grid>
            </Grid>
            <br/>
            <Grid container item xs={12}>
                <BottomTray />
            </Grid>
        </div>
    );
};

export default Dashboard;
