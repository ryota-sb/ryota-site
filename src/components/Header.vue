<template>
  <nav>
    <ul>
      <li><router-link to="/">Top</router-link></li>
      <li></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/skill">Skill</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
  nav {
    height: 50px;
    line-height: 50px;
    box-shadow: 0.5px 0.5px 3px 0.5px black;
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
          color: black;
          &:hover {
            border-bottom: 3px solid skyblue;
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