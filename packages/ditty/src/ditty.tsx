import { defineComponent } from 'vue'

export default defineComponent({
  name: 'test',
  setup() {
    return () => <div>test</div>
  }
})

export enum Direction {
  DOWN,
  UP
}
