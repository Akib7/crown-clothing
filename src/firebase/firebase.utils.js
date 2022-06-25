import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmCgihZG2RK8KglwSHGztc6aab8Cwb__w",
  authDomain: "crown-clothing-db-a6075.firebaseapp.com",
  projectId: "crown-clothing-db-a6075",
  storageBucket: "crown-clothing-db-a6075.appspot.com",
  messagingSenderId: "821312345094",
  appId: "1:821312345094:web:4165b2b49e10d31eee9f87",
};

const app = initializeApp(firebaseConfig);

// export const firebaseAuth = getAuth();
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// // export const signInWithGoogle = () => firebaseAuth.signInWithPopup(provider);

// export const signInWithGoogle = signInWithPopup(firebaseAuth, provider)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export const auth = getAuth();
export const signInWithGoogle = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
