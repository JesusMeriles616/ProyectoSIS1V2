//import firebase from 'firebase/app'
//import 'firebase/firestore'  // Importa los servicios de Firestore que necesites
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/database'
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn893twH-oylN0nRoYh_dJJ8VbP7JPKRI",
  authDomain: "sistemadeventascdt.firebaseapp.com",
  projectId: "sistemadeventascdt",
  storageBucket: "sistemadeventascdt.appspot.com",
  messagingSenderId: "805216012894",
  appId: "1:805216012894:web:59cc2d4baa74aa000582cf",
  measurementId: "G-932MZ0SK3K"
}

// Inicializa la conexión con Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }  

// Opcionalmente, puedes inicializar otros servicios de Firebase que necesites, como Firestore
const db = firebase.firestore()


// Exporta los servicios que desees utilizar en otros archivos
export { firebase, db }