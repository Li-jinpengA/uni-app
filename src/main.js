import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus from 'uview-plus' // 引入uview
export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus) // 使用uview
	return {
		app,
	};
}
