import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmCgihZG2RK8KglwSHGztc6aab8Cwb__w",
  authDomain: "crown-clothing-db-a6075.firebaseapp.com",
  projectId: "crown-clothing-db-a6075",
  storageBucket: "crown-clothing-db-a6075.appspot.com",
  messagingSenderId: "821312345094",
  appId: "1:821312345094:web:4165b2b49e10d31eee9f87",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(fStore, "users", `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  // console.log(snapShot);

  if (snapShot !== null) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(additionalData, email);
    try {
      await setDoc(userRef, {
        displayName: additionalData,
        email: email,
        createdAt: createdAt,
        // additionalData: additionalData,
      }).then(() => {
        console.log("data added successfully");
      });
    } catch (error) {
      console.log("error message", error.message);
    }
  }
  return userRef;
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
