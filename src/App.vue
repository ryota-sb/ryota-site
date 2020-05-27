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
import Header from './components/share/Header'
import Footer from './components/share/Footer'
export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .main {
    margin: 40px auto;
    width: 100%;
    text-align: center;
  }
</style>
