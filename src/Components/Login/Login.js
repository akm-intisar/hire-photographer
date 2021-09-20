import { Button } from 'react-bootstrap';
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";



const Login = () => {
    const auth = getAuth();
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    return (
        <div>
            <Button>Sign In Using Google</Button>
        </div>
    );
};

export default Login;