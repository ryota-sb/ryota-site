<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="6">
          <v-form
            v-model="valid"
            ref="valid_form"
          >
            <v-text-field
              v-model="name"
              label="お名前"
              color="#7CC6CF"
              :rules="nameRules"
              :counter="10"
              outlined
              dense
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              label="メールアドレス"
              color="#7CC6CF"
              :rules="emailRules"
              outlined
              dense
            >
            </v-text-field>
            <v-textarea
              v-model="content"
              label="内容"
              color="#7CC6CF"
              :rules="contentRules"
              :counter="100"
              outlined
              dense
            >
            </v-textarea>
            <v-btn
              block
              outlined
              color="#800080"
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
      content: '',
      valid: true,
      nameRules: [
        v => !!v || '名前を入力してください',
        v => v.length <= 10 || '名前は10文字以内で入力してください'
      ],
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が正しくありません'
      ],
      contentRules: [
        v => !!v || 'お問い合わせ内容を入力してください',
        v => v.length <= 100 || '100文字以内で入力してください'
      ]
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
      
      if (this.$refs.valid_form.validate()) {
        this.$axios.post(apiUrl, params).then(response => {
          console.log(response.data)
          this.name = '';
          this.email = '';
          this.content = '';
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
}
</script>