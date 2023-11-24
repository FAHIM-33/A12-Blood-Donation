import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";
import pt from 'prop-types'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    function createUser(email, password) {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function loginUser(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    function loginWithGoogle() {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    function logOutUser() {
        setLoading(true)
        return signOut(auth)
    }
    function updateNameImg(name, url) {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (usr) => {
            if (usr) {
                // console.log(usr)
            }
            else {
                console.log('no usr')
            }
            setUser(usr)
            setLoading(false)
        })


        return () => unSubscribe()
    }, [])


    const data = {
        user,
        loading,
        logOutUser,
        createUser,
        loginUser,
        loginWithGoogle,
        updateNameImg,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: pt.node,
}
export default AuthProvider;