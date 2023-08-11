import { createApp } from 'vue'
import App from './Homepage.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'
import '~/styles/homepage.css'

const app = createApp(App)
setupApp(app)
app.mount('#app')
