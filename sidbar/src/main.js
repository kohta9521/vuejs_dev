import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, cretateWebHistory } from 'vue-router'
import { createQualifiedName } from 'typescript'

const router = createRouter ({
    history: createQualifiedName(),
    routes: {
        path: '/',
        components: () => import ('./components/Home.vue')
    }
})

createApp(App).mount('#app')
