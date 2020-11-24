import { Card, Typography, Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import styles from './LineChartComponent.module.css';

const LineChartComponent = () => {
    
    const  data = {
        labels: ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
        datasets:[
            {
                label:'Tasks Complete',
                data:[
                    10, 15, 20, 25, 30, 35, 40, 45, 50, 20, 70, 100
                ],
                backgroundColor:[
                    'rgba(24,255,0, 0.7)'
                ]
            },
            {
                label:'Tasks Pending',
                data:[
                    5, 12, 4, 90, 70, 35, 80, 25, 10, 50, 10, 30
                ],
                backgroundColor:[
                    'rgba(255,162,0, 0.7)'
                ]
            }
        ]
    };
    
    return (
        <Card className={styles.container}>
            <Grid container direction='row' justify='center'>
                <Typography variant={"h6"} align={"center"} gutterBottom>Total Tasks Complete Each Month</Typography>
                <Line  type='line' data={data} options={{ maintainAspectRatio: true }} />
            </Grid>
        </Card>
    )
};

export default LineChartComponent;
