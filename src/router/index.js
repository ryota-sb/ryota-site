import Vue           from 'vue'
import Router        from 'vue-router'
import TopPage       from '@/Views/TopPage'
import AboutPage     from '@/Views/AboutPage'
import SkillPage     from '@/Views/SkillPage'
import PortfolioPage from '@/Views/PortfolioPage'
import ContactPage   from '@/Views/ContactPage'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top-page',
      component: TopPage
    },
    {
      path: '/about',
      name: 'about-page',
      component: AboutPage
    },
    {
      path: '/skill',
      name: 'skill-page',
      component: SkillPage
    },
    {
      path: '/portfolio',
      name: 'portfolio-page',
      component: PortfolioPage
    },
    {
      path: '/contact',
      name: 'contact-page',
      component: ContactPage
    }
  ]
})
