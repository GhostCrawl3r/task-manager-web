import React, {useState} from 'react';

export const UserLoggedIn = React.createContext();

// NEED to setup global context for the profile image.
// Add them into a GLobalContext provider like { [...,....], [...,...]} etc

const GlobalContext = ({children}) => {
    const [isLoggedIn, setLogin] = useState(false);
    
    return (
        <UserLoggedIn.Provider value={[isLoggedIn, setLogin]}>
            {children}
        </UserLoggedIn.Provider>
    );
};

export default GlobalContext;
