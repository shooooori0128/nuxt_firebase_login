// eslint-disable-next-line import/no-extraneous-dependencies
import { Middleware } from '@nuxt/types'
import { auth } from '@/plugins/firebase'

const authenticator: Middleware = ({ route, store, redirect }) => {
  auth.onAuthStateChanged((user) => {
    if (!user && route.name !== 'login') { redirect('/login') }
  })
}
export default authenticator
