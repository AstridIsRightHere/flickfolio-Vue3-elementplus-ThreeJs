import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue';
import LoginView from '../views/LoginView.vue';
import MovieDetails from '../views/MovieDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/list', name: 'list', component: ListView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails }, //动态路由
  ],
})

export default router
