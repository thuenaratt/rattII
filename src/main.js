import { createApp } from 'vue'
import App from './App.vue'
// import App from './HomeView.vue'
import router from './router'

import './assets/main.css'
// import 'swiper/css';

const app = createApp(App)

app.use(router)
app.provide('router',router)
app.mount('#app')
