import '@/assets/style.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright, faEnvelope, faLocationDot, faFile, faPhone)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n';

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(i18n);
app.use(router)

app.mount('#app')
