import './main.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import App from './App.vue'
import { QuillEditor } from '@vueup/vue-quill'
import { createApp } from 'vue'

createApp(App)
    .component('QuillEditor', QuillEditor)
    .mount('#app')
