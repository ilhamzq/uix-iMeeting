import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/css/style.css'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import List from './views/List.vue'
import Form from './views/Form.vue'

const page = import.meta.env.VITE_APP_TITLE

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App, meta: { page: '', title: '' } },
        { path: '/dashboard', component: Dashboard, meta: { page: 'dashboard', title: ' - Dashboard' } },
        { path: '/list/ruang', component: List,
            meta: {
                page: 'ruang',
                title: ' - Ruang Meeting',
                create: { visible: true, text: 'Pesan Ruangan' }
            }
        },
        { path: '/form/ruang', component: Form,
            meta: {
                page: 'ruang',
                title: ' - Ruang Meeting',
                create: { text: 'Pesan Ruangan' },
                back: { visible: true, text: 'Batal' },
                update: { text: 'Simpan' }
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = page + to.meta.title
    next()
})

const app = createApp(App)
app.use(router)
app.mount(document.body)