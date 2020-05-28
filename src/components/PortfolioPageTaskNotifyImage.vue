<template>
  <v-card>
    <v-carousel
      :show-arrows="false"
      height="280px"
      class="pc"
    >
      <v-carousel-item
        v-for="(item,i) in pc_items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
 
    <v-carousel
      :show-arrows="false"
      class="mobile"
    >
      <v-carousel-item
        v-for="(item,i) in mobile_items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      pc_items: [
        { src: require('@/assets/imgs/tasknotify/task_notify_top_page.png') },
      ],
      mobile_items: [
        { src: require('@/assets/imgs/tasknotify/task_notify_top_page_mobile.png') },
      ]
    }
  }
}
</script>