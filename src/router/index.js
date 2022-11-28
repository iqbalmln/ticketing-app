import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue"
import TicketDetail from "../views/TicketDetail.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
  {
    path: "/:id",
    name: "TicketDetail",
    component: TicketDetail
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles

// Route guard for auth routes

export default router;
