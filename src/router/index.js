import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '@/components/TopPage';
import AboutPage from '@/components/AboutPage';
import SkillPage from '@/components/SkillPage';
import PortfolioPage from '@/components/PortfolioPage';
import ContactPage from '@/components/ContactPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillPage
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})
