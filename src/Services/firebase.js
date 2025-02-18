// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Fs08VHLjeUKVCvby8Wztgkkgzkl-ggE",
  authDomain: "reactweb-firebase.firebaseapp.com",
  projectId: "reactweb-firebase",
  storageBucket: "reactweb-firebase.appspot.com",
  messagingSenderId: "296813377746",
  appId: "1:296813377746:web:15a202516ad4092bfbd50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };