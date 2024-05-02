/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword,    onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase/firebaseConfig";



export const AuthContext = createContext();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // login email ,passs 

    const signIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }







    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,


    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;