<template>
  <div class="top-page">
    <div class="top-page-title">
      <h1>Welcome to <span>My page</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Top'
}
</script>

<style lang="scss">
  .top-page {
    margin-top: 160px;
    width: 100%;
    .top-page-title {
      h1 {
        font-size: 60px;
        color: skyblue;
        // background: -webkit-linear-gradient(0deg, rgb(135, 206, 235), rgb(154, 205, 50));
        // background-clip: text;
        // -webkit-text-fill-color: rgba(0,0,0,0);
      }
    }
  }

  @media screen and (max-width: 420px) {
    .top-page {
      .top-page-title {
        width: auto;
        h1 {
          font-size: 55px;
          span {
            display: block;
          }
        }
      }
    }
  }
</style>