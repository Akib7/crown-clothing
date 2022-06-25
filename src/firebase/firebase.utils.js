import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmCgihZG2RK8KglwSHGztc6aab8Cwb__w",
  authDomain: "crown-clothing-db-a6075.firebaseapp.com",
  projectId: "crown-clothing-db-a6075",
  storageBucket: "crown-clothing-db-a6075.appspot.com",
  messagingSenderId: "821312345094",
  appId: "1:821312345094:web:4165b2b49e10d31eee9f87",
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
