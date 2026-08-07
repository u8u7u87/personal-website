import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Comments from './Comments.vue'
import './custom-overrides.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Comments', Comments)
  }
}
