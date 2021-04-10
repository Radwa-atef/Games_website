import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store"
import'bootstrap/dist/css/bootstrap.css'
import'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import VueScrollactive from 'vue-scrollactive';
import { BootstrapVue } from 'bootstrap-vue'
import vuetify from './vuetify'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import './assets/style.scss';
import VueCarousel from 'vue-carousel';
import VueSelectImage from 'vue-select-image'

require('vue-select-image/dist/vue-select-image.css')

Vue.use(VueSelectImage)
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueScrollactive);
Vue.use(Element, {locale})
Vue.config.productionTip = false;
Vue.use(VueGlide)
Vue.use(VueCarousel);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
