

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9zUz6TBqYVyoEXm1ppeIIYZtuDfLomBQ",
  authDomain: "proiectaplicatieelevi.firebaseapp.com",
  projectId: "proiectaplicatieelevi",
  storageBucket: "proiectaplicatieelevi.firebasestorage.app",
  messagingSenderId: "537469017540",
  appId: "1:537469017540:web:853bd7d9b647c6ac4a1891"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db };
export {auth}