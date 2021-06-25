<template>
  <div class="ryota-site">
    <div class="app-title">
      <h1>Ryota Site</h1>
    </div>

    <!-- 画像 -->
    <div class="ryotasite-image">
      <portfolio-page-my-site-image />
    </div>

    <!-- アプリ概要 -->
    <div class="app-description">
      <h2>概要</h2>
      <div class="text-box">
        <p>私のポートフォリオサイトです。</p>
        <p>お問い合わせフォームは、Vuetifyを使用しています。</p>
        <p>API Gateway + Lambda + SES でメールの送信を実装しています。</p>
      </div>
    </div>

    <!-- 使用言語、環境 -->
    <div class="use-language">
      <h2>使用言語・環境</h2>
      <ul>
        <li>・Vue.js</li>
        <li>・AWS(Amplify, Lambda, API Gateway, SES)</li>
      </ul>
    </div>

    <!-- Appリンク -->
    <a href="https://ryota-site.com">RyotaSite</a>
  </div>
</template>

<style lang="scss">
$light-skyblue: #7cc6cf;
$skyblue: #00b6c4;
.ryota-site {
  margin: 0 auto 70px;
  width: 500px;
  .app-title {
    h1 {
      padding: 10px;
      position: relative;
    }
    h1:before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 5px;
      display: inline-block;
      width: 70px;
      height: 3px;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      background-color: purple;
    }
  }
  .ryotasite-image {
    margin: 20px 0;
  }
  .mobile {
    display: none;
  }
  a,
  .a {
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
  .app-function,
  .app-description,
  .use-language {
    text-align: left;
    text-indent: 1em;
    h2 {
      padding: 10px;
      border-left: 10px solid $light-skyblue;
      border-bottom: 1px solid $light-skyblue;
    }
    .text-box {
      margin: 20px 20px;
    }
    ul {
      margin: 20px 0;
    }
  }
}

@media screen and (max-width: 420px) {
  .ryota-site {
    .app-title {
      margin: 0 20px;
    }
    .ryotasite-image {
      margin: 20px;
    }
    .pc {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
    .app-function,
    .app-description,
    .use-language {
      margin: 0 20px;
    }
  }
}
</style>