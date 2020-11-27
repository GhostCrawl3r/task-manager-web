import React, {useState} from 'react';

export const UserLoggedIn = React.createContext();
export const TaskContext = React.createContext([]);

// NEED to setup global context for the profile image.
// Add them into a GLobalContext provider like { [...,....], [...,...]} etc

const GlobalContext = ({children}) => {
    const [isLoggedIn, setLogin] = useState(false);
    const [tasks, setTasks] = useState([]);
    
    // const MasterContext = (UserLoggedIn,  TaskContext) => {
    //     return {
    //         userLogin: UserLoggedIn([isLoggedIn, setLogin]),
    //         tasks: TaskContext([tasks, setTasks])
    //     }
    // }
    
    console.log(UserLoggedIn);
    
    return (
        <UserLoggedIn.Provider value={[isLoggedIn, setLogin]}>
            {children}
        </UserLoggedIn.Provider>
    );
};

export default GlobalContext;
