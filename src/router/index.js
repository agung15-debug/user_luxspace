import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Success from "../views/Success.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/product/:id",
    props: true,
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/success",
    name: "success",
    component: Success,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
