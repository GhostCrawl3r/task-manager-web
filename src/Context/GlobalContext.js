import React, { useState} from 'react';


// NEED to setup global context for the profile image.

const GlobalContext = ({children}) => {
    
    
    return (
        <div>
            {children}
        </div>
    );
};

export default GlobalContext;
