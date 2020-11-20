import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, Typography, Grid } from '@material-ui/core';

import styles from './LineChartComponent.module.css';

const data = [
    {name: 'Monday', uv: 400},
    {name: 'Tuesday', uv: 600},
    {name: 'Wednesday', uv: 700, pv: 2400, amt: 2400},
    {name: 'Thursday', uv: 200, pv: 2400, amt: 2400},
    {name: 'Friday', uv: 100, pv: 2400, amt: 2400},
    {name: 'Saturday', uv: 50, pv: 2400, amt: 2400},
    {name: 'Sunday', uv: 900, pv: 2400, amt: 2400},
];

const LineChartComponent = () => {
    return (
        <Card className={styles.container}>
            <Grid container direction='row' justify='center'>
                <Typography variant={"h6"} align={"center"} gutterBottom>Total Tasks Complete Each Month</Typography>
                <LineChart width={700} height={300} data={data} className={styles.chart}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </Grid>
        </Card>
    )
};

export default LineChartComponent;
