import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import FormTask from '../views/FormTask.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        path: '/task',
        name: 'Task',
        component: FormTask
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
