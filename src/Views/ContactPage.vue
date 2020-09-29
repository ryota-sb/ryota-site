<template>
  <div class="contact-page">
    <div class="contact-page-title">
      <h1><span>C</span>ontact</h1>
      <p>- お問い合わせ -</p>
    </div>
    <div>
      <contact-page-form />
    </div>
  </div>
</template>

<script>
import ContactPageForm from '../components/ContactPageForm.vue'
export default {
  title: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      content: ''
    }
  },
  components: { ContactPageForm }
}
</script>

<style lang="scss">
.contact-page {
  .contact-page-title {
    margin-bottom: 30px;
    h1 {
      font-family: 'Vollkorn', serif;
      color: black;
      font-size: 40px;
      span {
        color: purple;
      }
    }
  }
}
</style>
