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
import { createRouter, createWebHistory } from 'vue-router';
const route = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
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

      }
      
    ]
  });
  
  createApp(App).use(route).mount('#app');
  

