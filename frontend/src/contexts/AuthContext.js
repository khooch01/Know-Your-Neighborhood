import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/user');
                setUser(response.data);
            } catch (error) {
                console.error('Fetch user error:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
