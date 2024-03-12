import Vue from 'vue'
import Router from 'vue-router'
import Books from './views/Books.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/books',
        },
        {
            path: '/books',
            name: 'Books',
            component: Books,
        },
        {
            path: '/books/new',
            name: 'new-books',
            component: New,
        },
        {
            path: '/books/:id',
            name: 'book-show',
            component: Show,
        },
        {
            path: '/books/:id/edit',
            name: 'book-edit',
            component: Edit,
        },
    ],
})
