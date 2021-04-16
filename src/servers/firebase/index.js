import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvQaT146PKhHTyz4umopNz9ccVBKmxv74",
  authDomain: "dataimage-74bfa.firebaseapp.com",
  projectId: "dataimage-74bfa",
  storageBucket: "dataimage-74bfa.appspot.com",
  messagingSenderId: "339441934123",
  appId: "1:339441934123:web:f6d2c2167bebca9833ef6e",
  measurementId: "G-VEC814CQ8C",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
