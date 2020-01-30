import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/work',
        component: () => import('./views/Work.vue')
    },
    {
        path: '/price',
        component: () => import('./views/Price.vue')
    }, 
    {
        path: '/about',
        component: () => import('./views/About.vue')
    }

    ]
})