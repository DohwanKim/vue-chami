import Vue from 'vue';
import VueRouter from 'vue-router';
import mainView from '@/views/mainView.vue';
import loginView from '@/views/loginView';
import firstWelcomeView from '@/views/firstWelcomeView';
import selectProblemView from '@/views/selectProblemView';
import problemDetailView from '@/views/problemDetailView';
import myPageView from '@/views/myPageView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'mainView',
    component: mainView
  },
  {
    path: '/login',
    name: 'loginView',
    component: loginView
  },
  {
    path: '/firstWelcome',
    name: 'firstWelcomeView',
    component: firstWelcomeView
  },
  {
    path: '/selectProblem',
    name: 'selectProblemView',
    component: selectProblemView
  },
  {
    path: '/myPage',
    name: 'myPageView',
    component: myPageView
  },
  {
    path: '/problemDetail',
    name: 'problemDetailView',
    component: problemDetailView
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
