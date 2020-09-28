<template>
  <div class="about-page">

    <!-- ページタイトル -->
    <div class="about-page-title">
      <h1>About Me</h1>
      <p>- 自己紹介 -</p>
    </div>

    <div class="introduction">

      <!-- 自分の写真 -->
      <div class="my-image">
        <img src="@/assets/ryota.jpg" alt="Ryotaの写真" width="150px" height="150px">
      </div>

      <!-- 自分の情報 -->
      <div class="info">
        <div class="my-info">
          <p>名前: 松井亮太(25)</p>
          <p>生年月日: 1994/12/6</p>
          <p>学歴: 静岡産業大学情報学部 卒業</p>
        </div>
      </div>

      <!-- 自分について -->
      <div class="about-me">
        <div class="programming-trigger">
          <h2>プログラミングを始めた理由</h2>
          <h3>1. 価値を生み出せる。</h3>
          <div class="text-box">
            <p>
              世の中には、いろいろな便利なサービスが増えてきています。
              最近はその多くがITによるものです。
            </p>
            <p>
              自分もその技術を使って、価値を提供する側になってみたいという思いがあり、
              まずは、自分で触ってみようということで学習を始めました。
            </p>
            <p>
              なにもわからない状態から始めましたが、なんとか簡単なサイトやアプリを作ることができました。
            </p>
            <p>
              また、技術の変化も激しいため、常に学習するという姿勢が必要です。
              今後も新しいことを柔軟に取り入れていけるような姿勢で頑張ります！
            </p>
          </div>
          <h3>2. アイデアを形にできる。</h3>
          <div class="text-box">
            <p>
              自分のアイデアをPC1台で0から形にできるところに魅力を感じました。
            </p>
            <p> 
              最初は、progateでプログラムを書きましたが、
              実際に表示されたり、動いたりしたときは、とても嬉しかったです！
            </p>
            <p>
              その反面でつまずくことも沢山ありますが、解決できた時はとても達成感があり、やりがいも感じました。
            </p>
          </div>
          <h3>3. 汎用性が高い</h3>
          <div class="text-box">
            <p>
              ある会社だけのスキルではなく、汎用性のあるスキルであると思ったからです。
            </p>
            <p>
              プログラミングスキルは、今後も数多くの場所で必要とされていくと思います。
              需要が増えていく中で、自分もスキルを身に着けて、
              誰かの役にたてたらいいなと思い、始めてみました。
            </p>
            <p>
              汎用性の高いスキルではありますが、挫折率がとても高いと言われています。
              それを見た時、チャンスだと思いましたし、挑戦してみたいなという気持ちになりました。
            </p>
          </div>
        </div>

        <div class="hobby">
          <h2>趣味・特技</h2>
          <h3>1. スノーボード</h3>
          <div class="text-box">
            <p>
              楽しそうだと思って始めてみました！
              初めていってその日に怪我をしてしまいましたが、
              現在も続けています！
            </p>
            <p>
              実際に滑ってる人や動画などを見て、滑れるようにはなりました！
              現在は、トリックに挑戦しています！
            </p>
          </div>
        </div>
        <p>制作物は、<router-link to="/portfolio"><span>こちら!!</span></router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page'
}
</script>

<style lang="scss">

  $light-skyblue: #7CC6CF;
  $skyblue: #00B6C4;

  .about-page {
    width: 500px;
    margin: 0 auto;
    .about-page-title {
      h1 {
        font-family: 'Vollkorn', serif;
        color: black;
        font-size: 40px;
      }
    }
    .introduction {
      margin: 20px 0;
      .my-image {
        position: relative;
        text-align: left;
        z-index: 10;
        img {
          border-radius: 3px;
        }
      }
      .info {
        position: relative;
        top: -120px;
        left: 30px;
        width: 450px;
        height: 150px;
        text-align: left;
        background-color: rgb(240,240,240);
        border-radius: 3px;
        z-index: 1;
        .my-info {
          margin: 20px 10px;
          position: absolute;
          top: 0;
          left: 130px;
          font-family: serif;
        }
      }
      .about-me {
        position: relative;
        top: -100px;
        .strength,
        .programming-trigger,
        .hobby {
          margin-bottom: 20px;
          text-align: left;
          h2 {
            padding: 10px;
            border-left: 10px solid $light-skyblue;
            border-bottom: 1px solid $light-skyblue;
            font-size: 22px;
          }
          h3 {
            margin: 20px 0 5px;
          }
          .text-box {
            padding: 10px;
            background-color: rgb(240,240,240);
            border-radius: 3px;
            letter-spacing: 0.5px;
            p {
              //text-indent: 1em;
              padding: 10px;
              line-height: 1.7em;
            }
          }
        }
      }
    }
    a {
      text-decoration: none;
      span {
        padding: 5px 10px;
        border: 1px solid purple;
        border-radius: 30px;
        color: purple;
        &:hover {
          background-color: purple;
          color: white;
        }
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) and (max-width: 420px) {
    .about-page {
      width: auto;
      margin: 0 20px;
      .introduction {
        .info {
          width: 300px;
        }
      }
      .about-me {
        p {
          text-align: left;
          font-size: 16px;
        }
      }
    }
  }
</style>