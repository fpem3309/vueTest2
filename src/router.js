import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path: "/list",
    component: List,
    children:[
        {
            path: "author",
            component: Author.vue,
        },
        {
            path: "comment",
            component: Comment.vue,
        },
    ]
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 