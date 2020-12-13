import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";
import ElementPlus from "element-plus";
import "./index.css";
import * as echarts from "echarts";
import { plugin } from "echarts-for-vue";

const app = createApp(App);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
// app.use(plugin, { echarts, h });
