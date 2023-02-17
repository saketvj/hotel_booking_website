// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHDAbuSNDq9R8_Vo2YeqLhI4qI9PW3qa4",
  authDomain: "hotel-website-f3a57.firebaseapp.com",
  projectId: "hotel-website-f3a57",
  storageBucket: "hotel-website-f3a57.appspot.com",
  messagingSenderId: "44949406954",
  appId: "1:44949406954:web:319d21784c982c20a90393",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
