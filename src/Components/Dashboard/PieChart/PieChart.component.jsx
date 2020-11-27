import React from 'react';
import {Card, Grid, Typography} from '@material-ui/core';
import styles from './PieChart.module.css';
import {Doughnut} from "react-chartjs-2";

const PieChartCom = () => {
    
    const data = {
      labels: ['Completed Tasks', 'Pending Tasks', 'Removed Tasks'],
      datasets:[
          {
              data: [ 10, 5, 20],
              backgroundColor: [
                  'rgba(24,255,0, 0.7)',
                  'rgba(255,162,0, 0.7)',
                  'rgb(255,0,0, 0.7)'
              ]
          }
      ],
    };
    
    return (
        <Card className={styles.container}>
            <Grid container direction='column' alignItems={"center"}>
                <Typography variant='h6' gutterBottom className={styles.title}>30 day breakdown</Typography>
                <br/><Doughnut data={data} type='doughnut' width={200} height={180} className={styles.chart}/>
            </Grid>
        </Card>
    );
};

export default PieChartCom;
