// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqpO2_NrfeNLPhHBDmcZ-R-7l5IbAUIIA",
  authDomain: "pet-shop-36df6.firebaseapp.com",
  projectId: "pet-shop-36df6",
  storageBucket: "pet-shop-36df6.appspot.com",
  messagingSenderId: "866709287927",
  appId: "1:866709287927:web:d331ab5092afca6b14f4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;