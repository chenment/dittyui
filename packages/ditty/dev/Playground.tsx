import { defineComponent } from 'vue'
import { DButton } from '../src/ditty'

export default defineComponent({
  name: 'Playground',
  setup() {
    return () => <DButton class="btn">Button</DButton>
  },
})
