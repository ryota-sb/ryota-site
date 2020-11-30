<template>
  <nav>
    <ul>
      <li v-for="(page, i) in pages" :key="i">
        <router-link :to="page.link">{{ page.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: 'Top',       link: '/' },
        { name: 'About',     link: '/about' },
        { name: 'Skill',     link: '/skill' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Contact',   link: '/contact' },
      ]
    }
  }
}
</script>

<style lang="scss">
  $light-skyblue: #7CC6CF;
  $skyblue: #00B6C4;
  nav {
    height: 50px;
    line-height: 50px;
    ul {
      display: flex;
      justify-content: flex-end;
      margin: 0 10px;
      li {
        a {
          display: block;
          padding: 0 10px;
          height: 100%;
          text-decoration: none;
          font-weight: bold;
          font-family: 'Vollkorn', serif;
          color: $light-skyblue;
          &:hover {
            border-bottom: 2px solid #fff;
            border-image: linear-gradient(to right, $skyblue 0%, purple 100%);
            border-image-slice: 1;
            color: $skyblue;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    nav {
    ul {
       padding: 0 25px;
       float: none;
     }
    }
  }
</style>