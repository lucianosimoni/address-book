import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
import { getDatabase, push, ref, set } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Firebase Variables
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export async function login(email, password) {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { uid, email } = userCredential.user;
      return { uid, email };
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          return { error: { code: error.code, message: "User not found." } };
        case "auth/wrong-password":
          return { error: { code: error.code, message: "Wrong password." } };
        case "auth/too-many-requests":
          return { error: { code: error.code, message: "Too many requests." } };
        default:
          return { error: { code: error.code } };
      }
    });

  return response;
}

export async function signup(username, email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { uid, email } = userCredential.user;

      set(ref(database, `users/${uid}`), {
        contacts: {},
        name: username,
      });

      return { uid, email };
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/weak-password":
          return { error: { code: error.code, message: "Wrong password." } };
        case "auth/email-already-in-use":
          return { error: { code: error.code, message: "Email in use." } };
        default:
          return { error: { code: error.code } };
      }
    });
}

export async function createContact(userUID, data) {
  const contactsRef = ref(database, `/users/${userUID}/contacts/`);
  push(contactsRef, data);
}
