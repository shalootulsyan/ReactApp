import React, { useState, useContext, useEffect } from "react";
import firebase from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  function handleSignup(email, password, userName) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        console.log("user created");
        await localStorage.setItem("userName", userName);
      });
  }

  function handleLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        console.log("user created");
      });
  }

  function handleSignOut() {
    firebase.auth().signOut();
  }

  const value = {
    currentUser,
    handleSignup,
    handleLogin,
    handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
