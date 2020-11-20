import React, { useState} from 'react';


// NEED to setup global context for the profile image.
// Add them into a GLobalContext provider like { [...,....], [...,...]} etc

const GlobalContext = ({children}) => {
    
    
    return (
        <div>
            {children}
        </div>
    );
};

export default GlobalContext;
