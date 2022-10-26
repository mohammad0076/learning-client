import React, { Children } from 'react';
import { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloadin] = useState(true);


    const providerLogin = (provider) => {
        setloadin(true)
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setloadin(true)
        return createUserWithEmailAndPassword(auth, email, password)


    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }
    const logout = () => {
        setloadin(true)
        return signOut(auth);

    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloadin(false);

        });
        return () => {
            unsubscribe();

        }
    })
    const authinfo = { user, providerLogin, logout, createUser, signIn, loading, updateUserProfile }
    const auth = getAuth(app);
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default Authprovider;