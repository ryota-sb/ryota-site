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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  .top-page-title {
    position: absolute;
    top: 150px;
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
      top: 180px;
      h1 {
        font-size: 55px;
      }
    }
  }
}
</style>
