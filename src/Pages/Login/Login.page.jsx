import React, {useContext} from 'react';
import {UserLoggedIn} from "../../Context/GlobalContext";

const Login = () => {
    const [isLoggedIn, setLogin] = useContext(UserLoggedIn);
    
    const handleClick = () => {
        setLogin(true);
    }
    
    return (
        <div>
            <button onClick={() => handleClick()}>Login</button>
        </div>
    );
};

export default Login;
