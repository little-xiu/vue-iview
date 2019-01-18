import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../pages/home/Index.vue'
import HomeUserDetail from "../pages/home/userDetail.vue";
import homePostDetail from "../pages/home/postsDetail.vue";
import homeDetail from '../pages/home/homeDetail.vue';

const routes = [
    {
        name: 'home',
        path: '/home',
        alias: '/homes',
        component: Home,
        children: [
            {
                name: "homeDetail",
                path: "home-detail",
                component: homeDetail,
            },
            {
                name: "HomeUserDetail",
                path: "user-detail/:userId",
                component: HomeUserDetail,
                props: true
            },
            {
                name: "homePostDetail",
                path: "post-detail/:id",
                component: homePostDetail,
                props: true
            }
        ]
    },
    {
        path: '**',
        redirect: '/home'
    }
];

export default new Router({
    routes
})
