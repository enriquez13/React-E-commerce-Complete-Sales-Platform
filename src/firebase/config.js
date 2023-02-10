// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCboX81XgSOvlfXzteic9VzV5EKh-Y6YJ0",
  authDomain: "ecommerce-112df.firebaseapp.com",
  projectId: "ecommerce-112df",
  storageBucket: "ecommerce-112df.appspot.com",
  messagingSenderId: "292736152819",
  appId: "1:292736152819:web:7eafd4f6d4978c613c7386"
};
const firebaseApp = initializeApp(firebaseConfig)
// Initialize Firebase
export default firebaseApp