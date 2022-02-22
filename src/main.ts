import { createApp } from "vue";
import App from "./App.vue";
import "./lib/yui.scss";
import "./index.scss";
import { router } from './router'
import 'github-markdown-css/github-markdown-light.css';

const app = createApp(App)
app.use(router)
app.mount("#app")
