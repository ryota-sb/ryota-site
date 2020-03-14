<template>
  <div class="portfolio-page">
    <div class="portfolio-page-title">
      <h1>Portfolio</h1>
      <p>- 制作物 -</p>
    </div>

    <!-- 画像切替 -->
    <div class="app-image-pc">
      <ul>
        <li v-if="isActive == 1">
          <img src="@/assets/imgs/bookshelf_top_page.png">
        </li>
        <li v-else-if="isActive == 2">
          <img src="@/assets/imgs/bookshelf_user_page.png">
        </li>
      </ul>
    </div>

    <div class="app-image-mobile">
      <ul>
        <li v-if="isActive == 1">
          <img src="@/assets/imgs/bookshelf_top_page_mobile.jpg">
        </li>
        <li v-else-if="isActive == 2">
          <img src="@/assets/imgs/bookshelf_user_page_mobile.jpg">
        </li>
      </ul>
    </div>

    <!-- 画像選択 -->
    <div class="tabs">
      <input class="select-button" type="radio" value="1" v-model="isActive">
      <input class="select-button" type="radio" value="2" v-model="isActive">
    </div>

    <!-- アプリ概要 -->
    <div class="app-description">
      <h2>概要</h2>
      <ul>
        <li>・読んだ本を記録しておく管理アプリです</li>
        <li>・登録した本は共有されます</li>
        <li>・いいねやコメントができます</li>
        <li>・継続日数をカウントできます（未完成）</li>
      </ul>
    </div>

    <!-- 使用言語、環境 -->
    <div class="use-language">
      <h2>使用言語・環境</h2>
      <ul>
        <li>・Ruby</li>
        <li>・Ruby on Rails</li>
        <li>・AWS(EC2)</li>
      </ul>
    </div>

    <!-- Appリンク -->
    <a href="http://app-bookshelf.site">BookShelfへ</a>

  </div>
</template>

<script>
export default {
  title: 'Portfolio',
  data() {
    return {
      isActive: 1
    }
  }
}
</script>

<style lang="scss">
  $light-skyblue: #7CC6CF;
  $skyblue: #00B6C4;
  .portfolio-page {
    margin: 0 auto;
    width:  500px;
    .portfolio-page-title {
      h1 {
        color: white;
        -webkit-text-stroke: 1px black;
      }
      p {
        margin-bottom: 30px;
      }
    }
    .app-image-pc > ul > li {
      img {
        border: 1px solid black;
      }
    }
    .app-image-mobile {
      display: none;
    }
    .tabs {
      margin-bottom: 20px;
      .select-button {
        position: relative;
        margin:5px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      .select-button:before,
      .select-button:after {
        position: absolute; 
        content: "";
        border-radius: 50%;
        transition: 0.7s;
      }
      .select-button::before {
        z-index: 1;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        background-color: white;
      }
      .select-button::after {
        z-index: 0;
        width: 20px;
        height: 20px;
        background-color: lightgray;
      }
      .select-button:checked:before {
        transform: scale(0, 0);
      }
    }
    a {
      margin: 10px auto;
      padding: 5px;
      width: 200px;
      display: block;
      border: 1px solid blue;
      border-radius: 30px;
      text-decoration: none;
      color: blue;
      &:hover {
        border: 1px solid $light-skyblue;
        color: $light-skyblue;
      }
    }
    .app-description,
    .use-language {
      text-align: left;
      h2 {
        padding: 10px;
        border-left: 10px solid $light-skyblue;
        border-bottom: 1px solid $light-skyblue;
      }
      ul {
        margin: 20px 0;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .portfolio-page {
      width: auto;
      .app-image-pc {
        display: none;
      }
      .app-image-mobile {
        display: inline-block;
        ul > li > img {
          border: 1px solid black;
        }
      }
      .app-description,
      .use-language {
        margin: 0 20px;
      }
    }
  }
</style>