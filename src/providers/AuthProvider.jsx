import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(false); // Change the initial loading state to false
    const [user, setUser] = useState()

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password) // Return the promise
            .finally(() => setLoading(false)); // Set loading to false when the operation is complete
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) // Return the promise
            .finally(() => setLoading(false)); // Set loading to false when the operation is complete
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const LogOut = () =>{
        signOut(auth)
    }

    const AuthInfo = {
        signUp,
        loading,
        logIn,
        user,
        LogOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
