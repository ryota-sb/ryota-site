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
import "./util/vh"

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
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }

  .main {
    text-align: center;
  }
</style>
