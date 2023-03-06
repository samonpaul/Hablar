import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../services/Firebase";
import Loader from "../components/Loader";


const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const signup = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const username = (currentUser, item) => {
        return updateProfile(currentUser, item)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setIsLoading(false)
        })

        return unsubscribe
    }, [])


    let value = {
        currentUser,
        signup,
        login,
        logout,
        username,
        setCurrentUser
    }

    return(
        <AuthContext.Provider value={value}>
            {!isLoading ? children : <Loader />}
        </AuthContext.Provider>
    )

}

