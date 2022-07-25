import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import metaApp from './views/meta_proto/app'

createApp(App).use(metaApp).use(store).use(router).mount('#app')
