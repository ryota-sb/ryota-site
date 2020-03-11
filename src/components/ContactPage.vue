<template>
  <div class="contact-page">
    <div class="contact-page-title">
      <h1>Contact</h1>
      <p>- お問い合わせ -</p>
    </div>
    <form id="contact_form">
      <input v-model="name" type="text" placeholder="お名前">
      <input v-model="email" type="text" placeholder="メールアドレス">
      <textarea v-model="content" placeholder="お問い合わせ内容"></textarea>
      <input type="button" value="送信" v-on:click="send">
    </form>
  </div>
</template>

<script>
export default {
  title: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      content: ''
    }
  },
  methods: {
    send() {
      this.axios.post('https://h4dc7a15ib.execute-api.us-east-1.amazonaws.com/v1/send',
      {
        name: "Ryota",
        email: "sample@email",
        content: "sample text"
      }).then((response) => {
        alert(response)
      }).catch((error) => (
        alert(error)
      ))
    }
  }
}
</script>

<style lang="scss">
  .contact-page {
    .contact-page-title {
      margin-bottom: 30px;
    }
    form {
      margin: 0 auto;
      width: 300px;
      input {
        margin-bottom: 15px;
        padding-left: 10px;
        width: 100%;
        height: 30px;
        outline: none;
      }
      textarea {
        margin-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
        width: 100%;
        height: 250px;
        outline: none;
        resize: none;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .contact-page {
      form {
        width: auto;
        input, textarea {
          width: 90%;
          -webkit-appearance: none;
        }
      }
    }
  }
</style>