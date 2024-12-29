import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firbase.config'



export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

       
        const [loading,setLoading] = useState(true);
        const [user,setUser] = useState(null);
        const [error,setError] = useState(null);
        const [success,setSuccess] = useState(null);
        console.log(user)


        const googleProvider = new GoogleAuthProvider()

        const handleGoogleLogIn = ()=>{
            return signInWithPopup(auth,googleProvider)
        }


        const handleRegister = (email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)

        }

        const handleLogIn = (email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
        }

        const handleLogOut = ()=>{
            return signOut(auth)
        }

        
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUser(currentUser);
                } else {
                    setUser(null);
                }
                setLoading(false);
            });
        
            return () => {
                unsubscribe();
            };
        }, []);



      const  authInfo={
                loading,
                setLoading,
                error,
                setError,
                user,
                setUser,
                success,
                setSuccess,
                handleRegister,
                handleLogIn,
                handleLogOut,
                handleGoogleLogIn
        }

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
