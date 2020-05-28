<template>
  <div class="skill-page">
    <div class="skill-page-title">
      <h1>Skill</h1>
      <p>- 言語、技術 -</p>
    </div>
    <div class="skill-index">
      <div class="group-frontend">
        <div class="skill-title">
          <h2><span>&lt;</span> フロントエンド <span>/</span><span>&gt;</span></h2>
        </div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div class="group-backend">
        <div class="skill-title">
          <h2><span>&lt;</span> バックエンド <span>/</span><span>&gt;</span></h2>
        </div>
        <ul>
          <li>Ruby</li>
        </ul>
      </div>
      <div class="group-framework">
        <div class="skill-title">
          <h2><span>&lt;</span> フレームワーク <span>/</span><span>&gt;</span></h2>
        </div>
        <ul>
          <li>Ruby on Rails</li>
          <li>Vue.js</li>
        </ul>
      </div>
      <div class="group-version-control">
        <div class="skill-title">
          <h2><span>&lt;</span> バージョン管理 <span>/</span><span>&gt;</span></h2>
        </div>
        <ul>
          <li>GitHub</li>
        </ul>
      </div>
      <div class="group-aws">
        <div class="skill-title">
          <h2><span>&lt;</span> AWS <span>/</span><span>&gt;</span></h2>
        </div>
        <ul>
          <li>EC2</li>
          <li>Amplify</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  $light-skyblue: #7CC6CF;
  $skyblue: #00B6C4;

  .skill-page {
    width: 500px;
    margin: 0 auto;
    .skill-page-title {
      margin-bottom: 20px;
      h1 {
        font-family: 'Vollkorn', serif;
        color: black;
        font-size: 40px;
      }
    }
    .skill-index {
      position: relative;
      top: -19px;
      .group-frontend,
      .group-backend,
      .group-framework,
      .group-version-control,
      .group-aws {
        margin-bottom: 10px;
        .skill-title {
          display: inline-block;
          position: relative;
          top: 19px;
          background-color: white;
          h2 {
            span {
              color: purple;
            }
          }
        }
        ul {
          padding: 10px;
          li {
            margin: 20px auto;
            padding: 10px;
            width: 150px;
            border: 1px solid black;
            border-radius: 50px;
          }
        }
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) and (max-width: 420px) {
    .skill-page {
      width: auto;
      margin: 0 20px;
    }
  }
</style>
