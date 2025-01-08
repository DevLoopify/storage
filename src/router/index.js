import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const token = sessionStorage.getItem('authToken')
        if (!token){
            next('/login')
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})

export default router