import Vue from 'vue';
import Router from 'vue-router';
import Registration from '@/components/Registration';
import HowToPlay from '@/components/HowToPlay';
import Quiz from '@/components/Quiz';
import Question from '@/components/Question';
import Finish from '@/components/Finish';
import Results from '@/components/Results';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Regisration',
      component: Registration,
    },
    {
      path: '/how-to-play',
      name: 'HowToPlay',
      component: HowToPlay,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/question',
      name: 'Question',
      component: Question,
    },
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish,
    },
  ],
});
