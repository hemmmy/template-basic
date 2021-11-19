import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Components from './Components'

export default createRouter({
    // mode: 'Hash'
    history: createWebHashHistory(),
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/components',
            component: Components
        }
    ]
})