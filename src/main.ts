// Register icon sprite
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './styles/normalize.css'
import './styles/index.less'
import 'animate.css'
// import './assets/iconfont/iconfont.css'

import SvgIcon from '@/components/SvgIcon/index.vue'
import Table from '@/components/Table/index.vue'
import Input from '@/components/Input/index.vue'
import Modal from '@/components/Modal/index.vue'

import waves from '@/directive/waves'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.component('Table', Table)
app.component('Input', Input)
app.component('Modal', Modal)

app.directive('waves', waves)

app.use(createPinia())
app.use(router)

app.mount('#app')
