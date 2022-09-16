import { useContext, createContext, useEffect } from "react";
import { signInWithRedirect, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";

  const AuthContext = createContext()

  export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      // signInWithPopup(auth, provider)
      signInWithRedirect(auth, provider)
    }

    // logout 

    const logOut = () => {
      signOut(auth)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log('User', currentUser)
      })

      return () => {
        unsubscribe()
      }
    }, [])


    return (
      <AuthContext.Provider value={{ googleSignIn, logOut, user }} >
          { children }
      </AuthContext.Provider>
    )

  }

  export const UserAuth = () => {
    return useContext(AuthContext)
  }