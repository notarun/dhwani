import '/node_modules/material-design-lite/material.min.css'
import '/node_modules/material-design-lite/material.min.js'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
