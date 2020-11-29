<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/share/Header.vue'
import Footer from './components/share/Footer.vue'
export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app {
    display: flex;
    flex-flow: column;
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  .main {
    text-align: center;
  }
  
  // safariのアドレスバーの高さによる高さ崩れ防止
  @supports (-webkit-touch-collout: none) {
    .main {
      height: -webkit-fill-available;
    }
  }
</style>
