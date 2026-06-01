
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Gallery from "../views/gallery.vue";
import Services from "../views/services.vue";
import Contact from "../views/contact.vue";



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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;