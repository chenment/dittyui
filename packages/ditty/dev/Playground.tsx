import { defineComponent } from 'vue'
import { DButton } from '../src/main'

export default defineComponent({
  name: 'Playground',
  setup() {
    const handleClick = (e: MouseEvent) => {
      console.log('oh')
      console.log(e.target)
    }

    return () => (
      <DButton block color="danger" onClick={handleClick}>
        button
      </DButton>
    )
  },
})
