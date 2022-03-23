import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import SiloList from './pages/silo_list.vue'
import ObjectInfo from './pages/object_infos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SiloList, },
        { path: '/object/:id', component: ObjectInfo, },
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')