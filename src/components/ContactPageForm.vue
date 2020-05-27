<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-form>
              <v-text-field
                v-model="name"
                outlined
              >
              </v-text-field>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: 'aaa'
    }
  }
}
</script>