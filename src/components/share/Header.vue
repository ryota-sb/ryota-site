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