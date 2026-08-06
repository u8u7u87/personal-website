import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Comments from './Comments.vue'
import '../../../../shared/global-nav.css'
import './custom-overrides.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Comments', Comments)
  }
}
