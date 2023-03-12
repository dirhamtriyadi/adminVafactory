import firebase from "firebase/app";
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyAhS6V6stBfkvC0726Of8clA8dVCYi3Apo",
  authDomain: "gambar-8393f.firebaseapp.com",
  projectId: "gambar-8393f",
  storageBucket: "gambar-8393f.appspot.com",
  messagingSenderId: "29510883494",
  appId: "1:29510883494:web:632cd45818b79c953cfc67",
  measurementId: "G-CSJW76SXKP",
};

export default firebase.initializeApp(firebaseConfig);

// gsutil cors set cors.json gs://gambar-8393f.appspot.com