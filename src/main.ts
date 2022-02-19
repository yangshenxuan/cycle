import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHashHistory } from "vue-router";
import Frank from "./components/Frank.vue";


const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [{ path: '/', component: Frank }]
})

const app = createApp(App)
app.use(router)
app.mount("#app")
