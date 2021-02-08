<template>
  <footer>
    <div class="footer-inner">
      <p>©2020 Ryota.</p>
      <div class="triangle-first"></div>
      <div class="triangle-second"></div>
      <div class="icons">
        <!-- <div class="twitter">
          <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </div> -->
        <div class="github">
          <a href="https://github.com/ryota-sb?tab=repositories">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  border-top: 1px solid purple;
  .footer-inner {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    .icons {
      .twitter,
      .github {
        display: inline-block;
        a {
          display: block;
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
          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    p {
      display: flex;
      align-items: center;
      color: purple;
    }
    .triangle-first:before,
    .triangle-first:after {
      content: "";
      position: absolute;
      right: 180px;
      bottom: 0;
      width: 0;
      height: 0;
    }
    .triangle-first:before {
      top: -11px;
      border-style: solid;
      border-color: transparent transparent purple transparent;
      border-width: 0 10px 10px 10px;
    }
    .triangle-first:after{
      top: -10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
      border-width: 0 10px 10px 10px;
      z-index: 1;
    }
    .triangle-second:before,
    .triangle-second:after {
      content: "";
      position: absolute;
      right: 130px;
      bottom: 0;
      width: 0;
      height: 0;
    }
    .triangle-second:before {
      top: -31px;
      border-style: solid;
      border-color: transparent transparent purple transparent;
      border-width: 0 30px 30px 30px;
    }
    .triangle-second:after{
      top: -30px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
      border-width: 0 30px 30px 30px;
      z-index: 1;
    }
  }
}
@media screen and (max-width: 420px) {
  footer {
    .footer-inner {
      .triangle-first:before,
      .triangle-first:after {
        right: 70px;
      }
      .triangle-second:before,
      .triangle-second:after {
        right: 20px;
      }
    }
  }
}
</style>