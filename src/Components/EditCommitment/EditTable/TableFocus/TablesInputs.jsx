import React from 'react';

export const TablesInputs = ({focus}) => {

    return focus.map(elem=>(
        
        <>
            <p>{elem.smartGoal}</p>
            <p>{elem.status}</p>            
                 
        </>            
    
))
};
