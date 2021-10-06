import { createWebHistory, createRouter } from "vue-router";
import home from "@/components/home.vue";
import product from "@/components/product.vue";
import about from "@/components/about.vue";
import contact from "@/components/contact.vue";
import user from "@/components/user.vue";
import primer from "@/components/primer.vue";
import conceler from "@/components/conceler.vue";
import blush from "@/components/blush.vue";
import foundation from "@/components/foundation.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/product",
    name: "product",
    component: product,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/user/:id",
    name: "user",
    component: user,
    props:true,
  },
  {
    path: "/product",
    name: "product",
    component: product,
    children:[
      {
        name:"primer",
        path:"/primer",
        component:primer
      },{
        name:"conceler",
        path:"/conceler",
        component:conceler
      },{
        name:"blush",
        path:"/blush",
        component:blush
      },
      {
        name:"foundation",
        path:"/foundation",
        component:foundation
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;