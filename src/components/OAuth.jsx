import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { doc } from 'firebase/firestore';
import { db } from "../firebase";
import { getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate();
  async function onGooleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // check if user is new or existing
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // create new user
        await setDoc(docRef,{
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
      
    } catch (error) {
      toast.error("could not authorize with Google 😢 ");
      console.log(error);
      
    }
  }
  return (
    <button type='button' onClick={onGooleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'>
        <FcGoogle className='text-2xl bg-white rounded-full mr'/>
        Continue with Google
    </button>
  )
}
