<template>
  <div class="about-page">
    <div class="about-page-title">
      <h1>About Me</h1>
      <p>- 自己紹介 -</p>
    </div>
    <img src="@/assets/ryota.jpg" alt="Ryotaの写真" width="150px" height="150px" />
    <p class="full-name">松井 亮太(25)</p>
    <div class="about-me">
      <p>1994年12月6日生まれ。</p>
      <p>静岡産業大学情報学部を卒業。</p>
      <p>パソコン一台でサービスやプロダクトを作ることができるプログラミングに興味をもち、未経験から独学で学習を開始。</p>
      <p>現在は、Webエンジニア転職を目指してRubyとRuby on Railsをメインに勉強中。</p>
      <p>自分の限界を決めずにコツコツと継続、努力する自信があります！</p>
      <p>趣味は、スノーボードと遠出すること！</p>
      <p>制作物は、<router-link to="/portfolio"><span>こちら！</span></router-link></p>
    </div>
  </div>
</template>

<style lang="scss">
  .about-page {
    .about-page-title {
      h1 {
        color: white;
        -webkit-text-stroke:1px black
      }
    }
    img {
      margin: 20px 0;
      border-radius: 50%;
    }
    .full-name {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: bold;
    }
    .about-me {
      p {
        padding-bottom: 10px;
        a {
          padding: 0 5px;
          text-decoration: none;
          color: red;
          &:hover {
            background: red;
            border-radius: 5px;
            color: white;
          }
        }
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) and (max-width: 420px) {
    .about-me {
      width: 250px;
      margin: 0 auto;
      p {
        text-align: left;
        font-size: 16px;
      }
    }
  }
</style>