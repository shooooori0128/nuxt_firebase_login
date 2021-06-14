<template>
  <v-form>
    <v-container>
      <v-text-field v-model="mail" label="MailAddress" />
      <v-text-field v-model="pass" label="Password" />
      <v-btn color="primary" @click="login">
        ログイン
      </v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { auth } from '@/plugins/firebase'

@Component({
  layout: 'default',
  components: {
  }
})
export default class LoginPage extends Vue {
  mail: string = ''
  pass: string = ''

  login () {
    auth.signInWithEmailAndPassword(this.mail, this.pass)
      .then(_user => this.$router.push('/'))
      // eslint-disable-next-line no-alert
      .catch(e => alert(e.message))
  }
}
</script>
