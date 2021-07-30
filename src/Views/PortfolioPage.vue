<template>
  <v-container>
    <div class="portfolio-page">
      <div class="portfolio-page-title">
        <h1><span>P</span>ortfolio</h1>
        <p>- 制作物 -</p>
      </div>
      <v-row justify="center">
        <template v-for="(item, i) in items">
          <v-col
            :key=i
            cols="12"
            sm="6"
            md="4"
          >
            <v-card>
              <v-img 
                :src=item.src
              />
              <v-card-text style="position: relative; padding: 0">
                <v-btn absolute top right fab :href=item.link>
                  <v-icon large>mdi-chevron-right</v-icon>
                </v-btn>
                <v-card-title v-text="item.title" />
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { 
          src: require("@/assets/imgs/bookshelf/bookshelf_user_page.png"),
          title: "Book Shelf",
          link: "/portfolio/bookshelf"
        },
        { 
          src: require("@/assets/imgs/ryotasite/ryota_site_top_page.png"),
          title: "Ryota Site",
          link: "/portfolio/ryotasite"
        },
        {
          src: require("@/assets/imgs/spotifydiscoverplaylist/spotify_discover_playlist.png"),
          title: "Spotify Discover Playlist",
          link: "/portfolio/spotifydiscoverplaylist"
        },
        {
          src: require("@/assets/imgs/fargateenv/fargate-env.png"),
          title: "Fargate環境構築",
          link: "/portfolio/fargateenv"
        }
      ]
    };
  },
};
</script>

<style lang="scss">
$light-skyblue: #7cc6cf;
$skyblue: #00b6c4;
.portfolio-page {
  margin-bottom: 70px;
  .portfolio-page-title {
    h1 {
      font-family: "Vollkorn", serif;
      color: black;
      font-size: 40px;
      span {
        color: purple;
      }
    }
    p {
      margin-bottom: 30px;
    }
  }
}
</style>