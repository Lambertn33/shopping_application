import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/home/HomeView.vue";

import AboutView from "./components/about/AboutView.vue";

import ShopView from "./components/shop/ShopView.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/about",
            component: AboutView,
        },
        {
            path: "/shop",
            component: ShopView,
        },
    ],
});

export default router;
