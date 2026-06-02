
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Gallery from "../views/gallery.vue";
import Services from "../views/services.vue";
import Contact from "../views/contact.vue";
import Destination from "../views/destination.vue";
import NorthernProvince from "../views/northernprovince.vue";
import SouthernProvince from "../views/southernprovince.vue";
import EasternProvince from "../views/easternprovince.vue";
import WesternProvince from "../views/westernprovince.vue";
import KigaliCity from "../views/Kigalicity.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
  {
    path: "/destinations",
    name: "destinations",
    component: Destination,
  },
  {
    path: "/northern",
    name: "northern",
    component: NorthernProvince,
  },
  {
    path: "/southern",
    name: "southern",
    component: SouthernProvince,
  },
  {
    path: "/eastern",
    name: "eastern",
    component: EasternProvince,
  },
  {
    path: "/western",
    name: "western",
    component: WesternProvince,
  },
  {
    path: "/kigali",
    name: "kigali",
    component: KigaliCity,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;