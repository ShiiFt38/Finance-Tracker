import React, { useState, useContext, createContext } from 'react';

const AccentColorContext = createContext();

export const useAccentColor = () => useContext(AccentColorContext);

export const AccentColorProvider = ({ children }) => {
    const [accentColor, setAccentColor] = useState('bg-blue-600');

    return (
        <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
            {children}
        </AccentColorContext.Provider>
    );
};