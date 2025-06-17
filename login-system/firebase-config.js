// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hm7EbyCEwbmBxCwOhpyQtFo9eC_YSmo",
  authDomain: "arp-login-system.firebaseapp.com",
  projectId: "arp-login-system",
  storageBucket: "arp-login-system.appspot.com",
  messagingSenderId: "15398944411",
  appId: "1:15398944411:web:54726247af61ca8b98103e",
  measurementId: "G-6TJ5C8HWHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
