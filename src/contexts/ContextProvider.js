import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = { //
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}


export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);

    return ( // we can also provide stateContext.provider
        <StateContext.Provider
            value={{
                activeMenu, // it can also be activeMenu:activeMenu (key:value pair in general)
                setActiveMenu
            }} 
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);