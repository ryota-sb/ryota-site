<template>
  <div class="skill-page">
    <div class="skill-page-title">
      <h1>Skill</h1>
      <p>- 使える言語、技術 -</p>
    </div>
    <ul>
      <li><p><span class="html">HTML</span><span class="and">&</span><span class="css">CSS</span></p></li>
      <li><p class="js">javascript</p></li>
      <li><p class="ruby">Ruby</p></li>
      <li><p class="rails">Ruby on Rails</p></li>
      <li><p class="vue">Vue.js</p></li>
      <li><p class="git">git</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  title: 'Skill'
}
</script>

<style lang="scss">
  .skill-page {
    .skill-page-title {
      p {
        margin-bottom: 30px;
      }
    }
    ul {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li {
        margin: 20px;
        width: 35%;
        max-width: 100%;
        height: 100px;
        line-height: 100px;
        box-shadow: 0.5px 0.5px 3px 0.5px gray;
        p {
          font-size: 24px;
          .html {
            color: skyblue;
          }
          .css {
            color: orange;
          }
          .and {
            padding: 0 5px;
          }
        }
        .js {
          color: rgb(255, 217, 0);
        }
        .ruby {
          color: red;
        }
        .vue{
          color: lightgreen;
        }
        .rails {
          color: red;
        }
        .git {
          color: orange;
        }
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) and (max-width: 420px) {
    .skill-page {
      ul {
        margin: 0 auto;
        width: 300px;
        display: flex;
        justify-content: center;
        li {
          width: 80%;
        }
      }
    }
  }
</style>
