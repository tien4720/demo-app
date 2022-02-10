import { createRouter, createWebHistory } from 'vue-router'
import ResourceView from '../views/ResourceView.vue'
import EmptyView from '../views/EmptyView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/resources',
            component: ResourceView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'empty',
            component: EmptyView
        },
        {
            path: '/resources',
            name: 'resources',
            component: ResourceView
        }
    ]
})

export default router
