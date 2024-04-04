import './assets/main.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')
