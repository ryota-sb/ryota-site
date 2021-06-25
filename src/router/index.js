import Vue           from 'vue'
import Router        from 'vue-router'
import TopPage       from '@/Views/TopPage'
import AboutPage     from '@/Views/AboutPage'
import SkillPage     from '@/Views/SkillPage'
import PortfolioPage from '@/Views/PortfolioPage'
import ContactPage   from '@/Views/ContactPage'

import BookShelf               from '@/Views/portfolio/BookShelf'
import RyotaSite               from '@/Views/portfolio/RyotaSite'
import SpotifyDiscoverPlaylist from '@/Views/portfolio/SpotifyDiscoverPlaylist'
import FargateEnv              from '@/Views/portfolio/FargateEnv'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',          name: 'top-page',       component: TopPage },
    { path: '/about',     name: 'about-page',     component: AboutPage },
    { path: '/skill',     name: 'skill-page',     component: SkillPage },
    { path: '/portfolio', name: 'portfolio-page', component: PortfolioPage },
    { path: '/contact',   name: 'contact-page',   component: ContactPage },
    { path: '/portfolio/bookshelf',               name: 'bookshelf-page',               component: BookShelf },
    { path: '/portfolio/ryotasite',               name: 'ryotasite-page',               component: RyotaSite },
    { path: '/portfolio/spotifydiscoverplaylist', name: 'spotifydiscoverplaylist-page', component: SpotifyDiscoverPlaylist },
    { path: '/portfolio/fargateenv',              name: 'fargateenv-page',              component: FargateEnv }
  ]
})
