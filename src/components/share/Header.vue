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
      margin: 0 10px;
      display: flex;
      justify-content: flex-end;
      li {
        transform: skew(-15deg);
        a {
          display: block;
          padding: 0 10px;
          height: 50px;
          text-decoration: none;
          font-weight: bold;
          font-family: 'Vollkorn', serif;
          color: $light-skyblue;
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