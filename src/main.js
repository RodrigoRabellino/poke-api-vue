import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import { createPinia } from "pinia";
import Router from "./routes";
import SimpleTypeaHead from "vue3-simple-typeahead";

const pinia = createPinia();

createApp(App).use(pinia).use(Router).use(SimpleTypeaHead).mount("#app");
