<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page.name">
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
    background-color: $light-skyblue;
    box-shadow: 0 0 2px $skyblue;
    ul {
      float: right;
      li {
        float: left;
        a {
          display: block;
          box-sizing: border-box;
          padding: 0 10px;
          height: 50px;
          text-decoration: none;
          font-weight: bold;
          font-family: 'Vollkorn', serif;
          color: white;
          &:hover {
            background-color: $skyblue;
            color: white;
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