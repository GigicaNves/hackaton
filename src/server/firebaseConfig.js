import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB95PWzNXeukcqRI1ZThj_ErbB7xpWlLzQ",
    authDomain: "hackaton-cef7b.firebaseapp.com",
    projectId: "hackaton-cef7b",
    storageBucket: "hackaton-cef7b.appspot.com",
    messagingSenderId: "783283314316",
    appId: "1:783283314316:web:cc62ce83c7fe9b0dde25a9"
};
  

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Inicialização do Firestore e Auth com persistência usando AsyncStorage
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Exporta as instâncias do Firestore e Auth para serem usadas em outras partes do aplicativo
export { db, auth };

