<template>
  <div class="spotify-discover-playlist">
    <div class="app-title">
      <h1>Spotify Discover</h1>
    </div>

    <!-- アプリ概要 -->
    <div class="app-description">
      <h2>概要</h2>
      <div class="text-box">
        <p>毎週月曜日に更新される、SpotifyのDiscover Weeklyというプレイリストの情報を保存しておき、いつでもその情報でプレイリストを作成できるようにするために作成したものです。</p>
      </div>
    </div>

    <!-- アプリ機能 -->
    <div class="app-function">
      <h2>機能</h2>
      <ul>
        <li>・プレイリストの作成</li>
      </ul>
    </div>

    <!-- 使用言語、環境 -->
    <div class="use-language">
      <h2>使用言語・環境</h2>
      <ul>
        <li>・Nuxt.js</li>
        <li>・Spotify API</li>
        <li>・Spread Sheet API</li>
        <li>・Lambda(Python)</li>
        <li>・Event Bridge</li>
      </ul>
    </div>

    <!-- Appリンク -->
    <a href="#">Spotify Discover Playlist</a>
  </div>
</template>

<style lang="scss">
$light-skyblue: #7cc6cf;
$skyblue: #00b6c4;
.spotify-discover-playlist {
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
  .spotify-discover-playlist-image {
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
  .spotify-discover-playlist {
    width: auto;
    .app-title {
      margin: 0 20px;
    }
    .spotify-discover-playlist-image {
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