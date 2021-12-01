import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Vuelidate from 'vuelidate'
import './theme.css'

createApp(App).use(store).use(Vuelidate).mount('#app')
