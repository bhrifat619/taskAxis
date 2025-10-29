import React, {useEffect, useState} from "react";
import {AuthContext} from "./Contexts";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (profileData) => {
    return updateProfile(auth.currentUser, profileData);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    loginWithGoogle,
    loading,
    logoutUser,
    createUser,
    updateUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
