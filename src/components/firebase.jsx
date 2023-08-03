import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getDatabase, ref, push } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsCIU9fJnQPgd62W804xFItCVwWR7tg4g",
  authDomain: "authentication-57736.firebaseapp.com",
  projectId: "authentication-57736",
  storageBucket: "authentication-57736.appspot.com",
  messagingSenderId: "320972747840",
  appId: "1:320972747840:web:f53f3a57fa04ce36125ba5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);