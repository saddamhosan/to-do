import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnl1KXsGbm9xgz8CX0b8L96AOYQGeRZ1Q",
  authDomain: "to-do-457ae.firebaseapp.com",
  projectId: "to-do-457ae",
  storageBucket: "to-do-457ae.appspot.com",
  messagingSenderId: "5023080923",
  appId: "1:5023080923:web:9ea26c83b4c4e49b32c7fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
