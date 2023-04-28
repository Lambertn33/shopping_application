import "./bootstrap";

import { createApp } from "vue";

import App from "./App.vue";

import AppCard from "./components/AppCard.vue";

import AppSpinner from './components/AppSpinner.vue';

import router from "./router";

import store from "./store";

import * as mdb from "mdb-ui-kit";

import "mdb-ui-kit/css/mdb.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faPhone,
    faBars,
    faHouse,
    faArrowRight,
    faHeart,
    faQuestionCircle,
    faBagShopping,
    faCartShopping,
    faGem,
    faEnvelope,
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faPhone,
    faArrowRight,
    faHeart,
    faBars,
    faGem,
    faHouse,
    faQuestionCircle,
    faBagShopping,
    faCircleUser,
    faEnvelope,
    faCartShopping
);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("app-spinner", AppSpinner)
    .component("app-card", AppCard)
    .use(mdb)
    .use(router)
    .use(store)
    .mount("#app");
