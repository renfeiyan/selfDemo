import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import List from '@/views/list'
import test from '@/views/test'
import personalPage from '@/components/personalPage'
import skillPage from '@/components/skillPage'
import jobIntention from '@/components/jobIntention'
import contactPage from '@/components/contactPage'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                  path: 'personalPage',
                  component: personalPage
                },
                {
                    path: 'skillPage',
                    component: skillPage
                },
                {
                    path: 'jobIntention',
                    component: jobIntention
                },
                {
                    path: 'contactPage',
                    component: contactPage
                }
            ]
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/', redirect: '/index/personalPage'
        }
]
})