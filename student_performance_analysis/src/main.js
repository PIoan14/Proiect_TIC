import { createApp } from 'vue'
import App from './App.vue'
import './styles.css';
import HomePreview from './components/HomePreview.vue'
import AdaugaStudent from './components/AdaugaStudent.vue';
import AnaliticeNote from './components/AnaliticeNote.vue';
import CautaElev from './components/CautaElev.vue';
import InstructiuniApp from './components/InstructiuniApp.vue';
import SetariProfil from './components/SetariProfil.vue';
import TotiElevii from './components/TotiElevii.vue';
import UpdateElev from './components/UpdateElev.vue';
import StergeCont from './components/StergeCont.vue';
import loginApp from './components/loginApp.vue';
import signUpApp from './components/signUpApp.vue';
// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { store } from './store';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9zUz6TBqYVyoEXm1ppeIIYZtuDfLomBQ",
  authDomain: "proiectaplicatieelevi.firebaseapp.com",
  projectId: "proiectaplicatieelevi",
  storageBucket: "proiectaplicatieelevi.firebasestorage.app",
  messagingSenderId: "537469017540",
  appId: "1:537469017540:web:853bd7d9b647c6ac4a1891"
};

// Initialize Firebase

initializeApp(firebaseConfig);


import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth()
const route = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/home',
        component: HomePreview,
       
      },
      {
        path : '/AdaugaStudent',
        component: AdaugaStudent

      },
      {
        path : '/Analitice',
        component: AnaliticeNote

      },
      {
        path : '/CautaStudent',
        component: CautaElev

      },
      {
        path : '/InstructiuniAplicatie',
        component: InstructiuniApp

      },
      {
        path : '/SetariProfil',
        component: SetariProfil

      },
      {
        path : '/TotiElevii',
        component: TotiElevii

      },
      {
        path : '/UpdateElev',
        component: UpdateElev

      },
      {
        path : '/StergeCont',
        component: StergeCont

      },
      {
        path : '/',
        component: loginApp

      },
      {
        path : '/SignUp',
        component: signUpApp

      }
      
    ]
  });

  route.beforeEach((to, from, next) => {
    const isAuthenticated = !!auth.currentUser; 
    console.log(isAuthenticated)// Verifică dacă utilizatorul este autentificat
  
    if (!isAuthenticated && to.path !== '/') {
      console.log("Nu esti logat")
      
      next({ path: '/' }); // Redirecționează la pagina de logare
    } else if (isAuthenticated && to.path === '/') {
      console.log(isAuthenticated)
      // Dacă utilizatorul este deja autentificat și încearcă să acceseze pagina de logare
      next({ path: '/home' }); // Redirecționează către pagina principală
    } else {
      next(); // Permite navigarea
    }
  });
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userData = { email: user.email, uid: user.uid };
      store.dispatch('updateUser', userData);
      console.log(user)
    } else {
      store.dispatch('updateUser', null);
    }
  });
  
  createApp(App).use(route).use(store).mount('#app');
  

