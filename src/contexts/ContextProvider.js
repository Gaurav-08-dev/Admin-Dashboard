import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialState = { //
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);


    const setMode = (e) => {

        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        // setThemeSettings(false)
    }

    const setColor = (mode) => {

        setCurrentColor(mode);
        localStorage.setItem('colorMode', mode)
        // setThemeSettings(false)

    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    useEffect(()=>{
        const currentThemeSelected=localStorage.getItem('themeMode')
        if(currentThemeSelected) setCurrentMode(currentThemeSelected)

        const currentColorSelected=localStorage.getItem('colorMode')
        if(currentColorSelected) setCurrentColor(currentColorSelected)
        
    },[])
    return ( // we can also provide stateContext.provider
        <StateContext.Provider
            value={{
                activeMenu, // it can also be activeMenu:activeMenu (key:value pair in general)
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                setColor, setMode,
                currentColor,currentMode,
                themeSettings, setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);