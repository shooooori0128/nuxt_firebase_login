<template>
  <v-container>
    <div v-if="isLogin">
      <v-btn @click="logout">
        ログアウト
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { auth } from '@/plugins/firebase'

@Component({
  layout: 'default',
  components: {
  }
})
export default class IndexPage extends Vue {
  isLogin:boolean = false

  async mounted () {
    await auth.onAuthStateChanged(user => this.isLogin = !!user)
  }

  async logout () {
    await auth.signOut()
    this.$router.push('/login')
  }
}
</script>
