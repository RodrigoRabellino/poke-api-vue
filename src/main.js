import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import { createPinia } from "pinia";
import Router from "./routes";

const pinia = createPinia();

createApp(App).use(pinia).use(Router).mount("#app");
