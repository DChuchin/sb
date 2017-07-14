import Vue from 'vue';
import Router from 'vue-router';
import Registration from '@/components/Registration';
import Quiz from '@/components/Quiz';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Regisration',
      component: Registration,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
  ],
});
