<template>
  <footer>
    <div class="icons">
      <div class="twitter">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </div>
      <div class="github">
        <a href="https://github.com/ryota-sb?tab=repositories">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
    <p>©2020 Ryota.</p>
  </footer>
</template>

<style lang="scss">
  footer {
    margin-top: auto;
    line-height: 30px;
    text-align: center;
    border-top: 1px solid purple;
    p {
      color: purple;
    }
    .icons {
      margin-top: 10px;
      text-align: rigth;
      .twitter,
      .github {
        display: inline-block;
        a {
          display: block;
          svg {
            margin: 5px;
            padding: 3px; 
            width: 26px;
            height: 26px;
            border: 1px solid purple;
            border-radius: 50%;
            color: purple;
            &:hover {
            border: 1px solid plum;
            color: plum;
            }
          }
        }
      }
    }
  }
</style>