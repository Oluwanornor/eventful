import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import JohndoeView from "@/views/JohndoeView.vue";
import LoremView from "@/views/LoremView.vue";
import AddView from "@/views/AddView.vue";
import EditView from "@/views/EditView.vue";
import CreateView from "@/views/CreateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },

    {
      path: "/johndoe",
      name: "johndoe",
      component: JohndoeView,
    },

    {
      path: "/lorem",
      name: "lorem",
      component: LoremView,
    },

    {
      path: "/add",
      name: "add",
      component: AddView,
    },

    {
      path: "/edit",
      name: "edit",
      component: EditView,
    },

    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
  ],
});

export default router;
