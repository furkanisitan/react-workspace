import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [city, setCity] = useState('Samsun');

    const values = {city, setCity};

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
