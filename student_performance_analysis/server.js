// index.js
const express = require("express");
const cors = require('cors');
const firebase = require("firebase-admin");
const admin = require('firebase-admin');
const app = express()

// Inițializarea Firebase Admin SDK cu cheia JSON
const serviceAccount = require("./proiectaplicatieelevi-firebase-adminsdk-svll0-edb712f861.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/proiectaplicatieelevi/firestore/databases/-default-/data/~2Felevi~2FShRqhjcXCFzl7z6a68EL" // Înlocuiește cu URL-ul bazei tale Firebase
});

const db = firebase.firestore();
const usersCollection = db.collection('elevi');

// Permite CORS pentru a permite cereri de la frontend

app.use(cors()) // Metodele permise;

// Ascultă schimbările din colecția 'users'
usersCollection.onSnapshot((snapshot) => {
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.data());
  });
  console.log('Datele actualizate pe server:', users);
  // Aici poți actualiza orice date pe server dacă este necesar
});

// API pentru a obține toți utilizatorii
app.get('/data', (req, res) => {
  usersCollection.get()
    .then((snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });
      res.json(users);
    })
    .catch((error) => {
      console.error('Eroare la obținerea datelor:', error);
      res.status(500).send('Eroare la obținerea datelor');
    });
});
const validateTokenLater = async (req, res, next) => {
  
  console.log('Middleware-ul inițial fără token');
  next();  // Continuă cu următoarea fază sau ruta
};

const validateToken = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(400).send('Token not provided');
    
  }

  // Extrage tokenul JWT din 'Bearer <token>'
  const idToken = authorizationHeader.split('Bearer ')[1]; 
  console.log(idToken)

  if (!idToken) {
    return res.status(400).send('Token is not valid');
  }

  try {
    
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    console.log("Good")
    req.user = decodedToken;
    next(); 
  } catch (error) {
    return res.status(401).send('Invalid token');
  }
};
app.post('/verif-jwt', (validateTokenLater));

app.post('/verif-jwt', validateToken, (req, res) => {
  
  res.status(200).json(`Token valid! UID-ul utilizatorului este: ${req.user.uid}`);
});

app.listen(3000, () => {
  console.log('Serverul rulează pe http://localhost:3000');
});
