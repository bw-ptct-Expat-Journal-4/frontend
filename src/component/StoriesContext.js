import React, { useState, createContext } from 'react';
import testData from '../utility/testData';

export const StoriesContext = createContext();

export const StoriesProvider = (props) => {
    const [users, setUsers] = useState(testData);

    return (
        <StoriesContext.Provider value={[users, setUsers]}>
            {props.children}
        </StoriesContext.Provider>
    )
}