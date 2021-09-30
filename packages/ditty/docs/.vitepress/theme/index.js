import DefaultTheme from 'vitepress/dist/client/theme-default'
import * as ditty from '../../../lib/main.mjs'
import CodeBox from '../components/Codebox.vue'
import DemoBox from '../components/DemoBox.vue'
import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    for (let key in ditty) {
      const comp = ditty[key]
      if (comp.name) {
        app.component(comp.name, comp)
      }
    }

    app.component('CodeBox', CodeBox)
    app.component('DemoBox', DemoBox)
  },
}
