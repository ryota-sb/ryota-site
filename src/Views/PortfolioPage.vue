<template>
  <div class="portfolio-page">
    <div class="portfolio-page-title">
      <h1>Portfolio</h1>
      <p>- 制作物 -</p>
    </div>

    <!-- BookShelf -->
    <div class="bookshelf">

      <div class="app-title">
        <h1>Book Shelf</h1>
      </div>

      <!-- 画像 -->
      <div class="bookshelf_image">
        <portfolio-page-book-shelf-image />
      </div>

      <!-- アプリ概要 -->
      <div class="app-description">
        <h2>概要</h2>
        <div class="text-box">
          <p>
            読んだ本を管理、共有するためのアプリです。
          </p>
          <p>
            読んだのに内容を覚えていない、忘れてしまう問題を解決する為に作成しました！
          </p>
          <p>
            他の人の本棚も見ることができるので、
            自分が知らない本を見つけるきっかけにもなります。
          </p>
          <p>
            いろいろな本を読んで知識を増やしてみよう！
          </p>
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
          <li>・AWS(EC2) + Nginx + Unicorn</li>
        </ul>
      </div>

      <!-- Appリンク -->
      <div class="a" >BookShelf準備中</div>
    </div>

    <!-- Ryota Site -->
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
          <p>
            私のポートフォリオサイトです。
          </p>
          <p>
            お問い合わせフォームは、Vuetifyを使用しています。
          </p>
          <p>
            API Gateway + Lambda + SES でメールの送信を実装しています。
          </p>
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
      <a href="https://ryota-site.work">RyotaSite</a>
    </div>

    <!-- Task Notify -->
    <div class="task-notify">

      <div class="app-title">
        <h1>Task Notify</h1>
      </div>

      <!-- 画像 -->
      <div class="tasknotify-image">
        <portfolio-page-task-notify-image />
      </div>

      <!-- アプリ概要 -->
      <div class="app-description">
        <h2>概要</h2>
        <div class="text-box">
          <p>
            登録したタスクをLineで通知してくれるアプリです。
          </p>
        </div>
      </div>

      <!-- アプリ機能 -->
      <div class="app-function">
        <h2>機能</h2>
        <ul>
          <li>・タスクの登録、削除</li>
          <li>・タスクの通知（LINE）</li>
        </ul>
      </div>

      <!-- 使用言語、環境 -->
      <div class="use-language">
        <h2>使用言語・環境</h2>
        <ul>
          <li>・Ruby on Rails</li>
          <li>・Vue.js</li>
          <li>・Vuex</li>
          <li>・Vuetify</li>
          <li>・LINE Message API</li>
          <li>・Heroku</li>
        </ul>
      </div>

      <!-- Appリンク -->
      <div class="a">TaskNotify準備中</div>
    </div>
  </div>
</template>

<script>
import PortfolioPageBookShelfImage from '../components/PortfolioPageBookShelfImage.vue'
import PortfolioPageMySiteImage from '../components/PortfolioPageMySiteImage.vue'
import PortfolioPageTaskNotifyImage from '../components/PortfolioPageTaskNotifyImage.vue'

export default {
  components: { 
    PortfolioPageBookShelfImage,
    PortfolioPageMySiteImage,
    PortfolioPageTaskNotifyImage
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
        font-family: 'Vollkorn', serif;
        color: black;
        font-size: 40px;
      }
      p {
        margin-bottom: 30px;
      }
    }
    .bookshelf,
    .ryota-site,
    .task-notify {
      margin-bottom: 70px;
      .app-title {
        h1 {
          padding: 10px;
          border-top: 1px solid $light-skyblue;
          border-right: 1px solid $light-skyblue;
          border-left: 10px solid $light-skyblue;
          border-bottom: 1px solid $light-skyblue;
        }
      }
      .bookshelf_image,
      .ryotasite-image,
      .tasknotify-image {
        margin: 20px 0;
      }
      .mobile {
        display: none;
      }
      a, .a {
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
  }
  @media screen and (max-width: 420px) {
    .portfolio-page {
      width: auto;
      .bookshelf,
      .ryota-site,
      .task-notify {
        .app-title {
          margin: 0 20px;
        }
        .bookshelf_image,
        .ryotasite-image,
        .tasknotify-image {
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
  }
</style>