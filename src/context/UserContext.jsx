import React, { createContext } from "react";

export const DataContext= createContext();

function UserContext({children}){
    console.log();
    
    const username = "navneet";

    return(
        <>
        <DataContext.Provider value={456}>
         {children}
        </DataContext.Provider>

        </>
    )
}

export default UserContext;