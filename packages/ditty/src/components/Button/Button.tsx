import { defineComponent } from 'vue'

import './btn.scss'

export default defineComponent({
  name: 'DButton',
  setup(props, { slots }) {
    return () => <h2 class="btn">{slots.default && slots.default()}</h2>
  },
})
