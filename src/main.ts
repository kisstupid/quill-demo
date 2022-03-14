import { createApp } from 'vue'
import App from './App.vue'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

createApp(App)
    .component('QuillEditor', QuillEditor)
    .mount('#app')
