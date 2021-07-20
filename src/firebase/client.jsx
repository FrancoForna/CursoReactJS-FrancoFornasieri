import firebase from "firebase/app";
import "@firebase/firestore";
import { useContext, useEffect } from "react";
import { resolveTypeReferenceDirective } from "typescript";
//Esto es para que se configure la app con firebase

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB8EigWMkbK023qK_VWM6VQp2fkbjajr44",
  authDomain: "dolce-vitta-2bf92.firebaseapp.com",
  projectId: "dolce-vitta-2bf92",
  storageBucket: "dolce-vitta-2bf92.appspot.com",
  messagingSenderId: "459298743342",
  appId: "1:459298743342:web:e8e190f2a9800f3368abbf",
});

export const getFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
};

export const getStorage = () => {
  return firebase.storage();
};
// Initialize Firebase
