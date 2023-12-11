/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import useAxiosPublic from "../hooks/useAxiosPublic";


 export const  AuthContex =createContext()

const AuthProvider = ({children}) => {
    const [user, setuser] =useState()
    const axiosesecure =useAxiosPublic()
    const [loadding, setloadding]=useState(true)
    const provider =new GoogleAuthProvider()
    const createsingup =(email,password)=>{
        setloadding (true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userlogin =(email,password)=>{
        setloadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const google=()=>{
        setloadding(true)
        return signInWithPopup(auth,provider)
       
    }
    const logout =()=>{
        setloadding(true)
        signOut(auth)
    }


    useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth ,currentUser =>{
        setuser(currentUser)
        if(currentUser){
            const userinfo={email:currentUser.email}
            axiosesecure.post("/jwt",userinfo)
            .then(res=>{
                localStorage.setItem("access-token",res.data.token)
            })
        }
        else{
            localStorage.removeItem("access-token")
        }
        setloadding(false)
    })
    return ()=>{
        return unsubcribe();
    }
    },[axiosesecure])

    
    const authinfo={
        user,loadding,userlogin,createsingup,
        logout,google
    }
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;