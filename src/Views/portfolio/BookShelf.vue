<template>
  <div class="bookshelf">
    <div class="app-title">
      <h1>Book Shelf</h1>
    </div>

    <!-- 画像 -->
    <div class="bookshelf-image">
      <portfolio-page-book-shelf-image />
    </div>

    <!-- アプリ概要 -->
    <div class="app-description">
      <h2>概要</h2>
      <div class="text-box">
        <p>読んだ本を管理、共有するためのアプリです。</p>
        <p>
          読んだのに内容を覚えていない、忘れてしまう問題を解決する為に作成しました！
        </p>
        <p>
          他の人の本棚も見ることができるので、
          自分が知らない本を見つけるきっかけにもなります。
        </p>
        <p>いろいろな本を読んで知識を増やしてみよう！</p>
      </div>
    </div>

    <!-- アプリ機能 -->
    <div class="app-function">
      <h2>機能</h2>
      <ul>
        <li>・読んだ本を記録できます</li>
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
        <li>・EC2 + Nginx + Unicorn</li>
        <li>・Route53（独自ドメイン）</li>
      </ul>
    </div>

    <!-- Appリンク -->
    <a href="http://app-bookshelf.site">BookShelf</a>
  </div>
</template>

<style lang="scss">
$light-skyblue: #7cc6cf;
$skyblue: #00b6c4;
.bookshelf {
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
  .bookshelf-image {
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
  .bookshelf {
    .app-title {
      margin: 0 20px;
    }
    .bookshelf_image {
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