<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="6">
          <v-form>
            <v-text-field
              v-model="name"
              label="お名前"
              color="#7CC6CF"
              outlined
              dense
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              label="メールアドレス"
              color="#7CC6CF"
              outlined
              dense
            >
            </v-text-field>
            <v-textarea
              v-model="content"
              label="内容"
              color="#7CC6CF"
              outlined
              dense
            >
            </v-textarea>
            <v-btn
              block
              outlined
              color="#7CC6CF"
              @click="send"
            >
              送信
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      content: ''
    }
  },
  methods: {
    send() {
      const params = {
        name: this.name,
        email: this.email,
        content: this.content
      }
      const apiUrl = 'https://7rpd3dcicb.execute-api.ap-northeast-1.amazonaws.com/v1/sendmail'
      this.$axios.post(apiUrl, params).then(response => {
        console.log(response.data);
        this.name = '';
        this.email = '';
        this.content = '';
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>