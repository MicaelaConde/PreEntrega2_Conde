import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKUS5NuOVGEAMwdCQmRf3eFpy2MyfZxQA",
  authDomain: "grandhotel-11e90.firebaseapp.com",
  projectId: "grandhotel-11e90",
  storageBucket: "grandhotel-11e90.appspot.com",
  messagingSenderId: "931036109167",
  appId: "1:931036109167:web:d7105bcf6f6865f2aff09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

