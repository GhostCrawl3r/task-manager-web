import React, {useContext} from 'react';
import {UserLoggedIn} from "../../Context/GlobalContext";
import {Card, Grid} from "@material-ui/core";
import styles from './Login.page.css';

const Login = () => {
    const [isLoggedIn, setLogin] = useContext(UserLoggedIn);
    
    const handleClick = () => {
        setLogin(true);
    }
    
    return (
        <div>
            <Grid container direction='row' justify='center' className={styles.container}>
                <Card className={styles.card} elevation={3}>
                    <button onClick={() => handleClick()} className={styles.button}>Login</button>
                </Card>
            </Grid>
        </div>
    );
};

export default Login;
