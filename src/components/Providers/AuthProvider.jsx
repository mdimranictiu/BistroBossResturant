import {
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import useAxiosPublic from "../../hook/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()
    const axiosPublic=useAxiosPublic()
    const googleSinIn=()=>{
       return signInWithPopup(auth, provider)
    }

    // Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Monitor Auth State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth State Changed:", currentUser);
            if(currentUser){
         // get token and store it to client side
         const userInfo= {email: currentUser.email}
            axiosPublic.post('/jwt',userInfo)
            .then((res)=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
            })
            }
            else{
              // remove token
              localStorage.removeItem('access-token')
            }
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,googleSinIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
