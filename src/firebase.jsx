import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjy-Jms2OQbqPLWp-DxiNlXTXsY7SZgvU",
  authDomain: "instantchat-72c2b.firebaseapp.com",
  projectId: "instantchat-72c2b",
  storageBucket: "instantchat-72c2b.appspot.com",
  messagingSenderId: "1042656823",
  appId: "1:1042656823:web:a1fca0e4e4c56f620699b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
