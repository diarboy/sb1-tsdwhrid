import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Particles from 'vue3-particles'
import Vue3Lottie from 'vue3-lottie'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(Vue3Lottie)
app.mount('#app')