import { createApp } from 'vue'
import App from './App.vue'
import '../public/index.css'
import axios from 'axios'
import router from './router'

const app = createApp(App);

app.provide("api", axios.create({
    baseURL: "https://api.spacexdata.com/v4"
}));

app.provide("route", )

app.use(router);

app.mount('#app');
