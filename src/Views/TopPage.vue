<template>
  <div class="top-page">
    <div class="top-page-title">
      <h1>Welcome to <span>Ryota Site.</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Top'
}
</script>

<style lang="scss">
$skyblue: #7CC6CF;
.top-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .top-page-title {
    h1 {
      font-size: 80px;
      font-family: 'Vollkorn', serif;
      color: $skyblue;
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
