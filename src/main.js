import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import myRouter from './router.js';

createApp(App).use(myRouter).mount('#app')
