import React, { createContext, useEffect, useState } from 'react';
import firebase from './fire';
import auth from 'firebase/auth';
import FirebaseUtil from './FirebaseUtil';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    
    const onAuthStateChanged = (user=firebase.user | null) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    }, []);

    if (initializing) return null;

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}