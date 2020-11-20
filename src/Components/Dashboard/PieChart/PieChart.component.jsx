import React from 'react';
import {Card, Grid, Typography} from '@material-ui/core';
import {Pie, PieChart, Tooltip} from "recharts";
import styles from './PieChart.module.css';

const PieChartCom = () => {
    
    const data01 = [
        {
            "name": "Tasks Created",
            "value": 50
        },
        {
            "name": "Tasks Pending",
            "value": 30
        },
        {
            "name": "Tasks Complete",
            "value": 70
        }
    ];
    
    return (
        <Card className={styles.container}>
            <Grid container direction='column' alignItems={"center"}>
                <Typography variant='h6' gutterBottom className={styles.title}>30 day breakdown</Typography>
                <PieChart width={300} height={300}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Tooltip />
                </PieChart>
            </Grid>
        </Card>
    );
};

export default PieChartCom;
