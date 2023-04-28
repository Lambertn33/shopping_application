import "./bootstrap";

import { createApp } from "vue";

import App from "./App.vue";

import TheCard from "./components/TheCard.vue";

import TheSpinner from './components/TheSpinner.vue';

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
    faCircleUser
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faPhone,
    faArrowRight,
    faHeart,
    faBars,
    faHouse,
    faQuestionCircle,
    faBagShopping,
    faCircleUser,
    faCartShopping
);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("the-spinner", TheSpinner)
    .component("the-card", TheCard)
    .use(mdb)
    .use(router)
    .use(store)
    .mount("#app");
