import { createContext, useEffect, useState } from "react";
export const FirebaseAuth = createContext(null);
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Config/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const provider = new GoogleAuthProvider();


const AuthContext = ({ children }) => {
  const AxiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  //google
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  };
  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  //sign up
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };
  //log in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };
  // update user
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
  //manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      
      if (user) {
   
        AxiosPublic.post('/jwt', { email: user?.email })
          .then(res => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            setLoading(false);
          }
        })
} else {
        localStorage.removeItem('token')
        setLoading(false);
}
      return () => {
            return unsubscribe();
        }
});
  },[AxiosPublic])
  const values = {
    googleSignIn,
    signUp,
    logIn,
    user,
    loading,
    logOut,
    updateUserProfile
  }
  return (
    <FirebaseAuth.Provider value={values}>
      {children}
    </FirebaseAuth.Provider>
  );
};

export default AuthContext;