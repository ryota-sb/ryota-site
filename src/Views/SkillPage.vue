<template>
  <div class="skill-page">
    <div class="skill-page-title">
      <h1><span>S</span>kill</h1>
      <p>- 言語、技術 -</p>
    </div>

    <v-row>
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
      >
        <v-card>
          <v-card-title>{{ skill.title }}</v-card-title> 
          <v-card-text
            v-for="(stack, i) in skill.stacks"
            :key="i"
          >
            <div class="icon">
              <img class="logo" :src="stack.img" />
            </div>
            <div class="name">
              {{ stack.name }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import skills from '../data/skill'
export default {
  title: 'Skill',
  data () {
    return {
      skills: skills
    }
  }
}
</script>

<style lang="scss">
$light-skyblue: #7CC6CF;
$skyblue: #00B6C4;
.skill-page {
  margin: 0 auto 40px;
  width: 500px;
  .skill-page-title {
    margin-bottom: 20px;
    h1 {
      font-family: 'Vollkorn', serif;
      color: black;
      font-size: 40px;
      span {
        color: purple;
      }
    }
  }
  .icon {
    margin-right: 10px;
    width: 80px;
    display: inline-block;
    vertical-align: middle;
    .logo {
      width: 45px;
      margin: 0;
    }
  }
  .name {
    display: inline-block;
    width: 80px;
  }
  .v-card {
    padding-bottom: 16px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio:0) and (max-width: 420px) {
  .skill-page {
    width: auto;
    margin: 0 20px;
  }
}
</style>
