// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhebMIEfenJhLAueaw-_ErAiab1C-Kihs",
  authDomain: "realtor-clone-react-94d6d.firebaseapp.com",
  projectId: "realtor-clone-react-94d6d",
  storageBucket: "realtor-clone-react-94d6d.appspot.com",
  messagingSenderId: "698164798103",
  appId: "1:698164798103:web:df5d3a26ad9b531e113fd2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();