// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTubALndn4f7NwzcbkKpfavNzP99h6Oqc",
  authDomain: "bistro-boss-e6775.firebaseapp.com",
  projectId: "bistro-boss-e6775",
  storageBucket: "bistro-boss-e6775.appspot.com",
  messagingSenderId: "354858124609",
  appId: "1:354858124609:web:763e7b52a9e2db0c5f0dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth