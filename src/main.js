import { createApp } from 'vue'
import App from './App.vue'
import '../public/index.css'
import axios from 'axios'

const app = createApp(App);

app.provide("api", axios.create({
    baseURL: "https://api.spacexdata.com/v4"
}));

app.mount('#app');
