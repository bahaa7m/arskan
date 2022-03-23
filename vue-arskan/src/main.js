import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import SiloPage from './pages/silo_page.vue'
import ObjectInfo from './pages/object_infos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SiloPage, },
        { path: '/object/:id', component: ObjectInfo, },
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')