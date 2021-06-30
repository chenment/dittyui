import { defineComponent, ref } from 'vue'
import { DInput } from '../src/main'

export default defineComponent({
  name: 'InputPg',
  setup() {
    const value = ref<string>('hello')

    const handleFocus = () => {
      console.log('focused')
    }

    return () => (
      <div class="p-4" style="width: 500px">
        <div class="py-4">
          <DInput v-model={value.value} />
        </div>

        <div class="py-4 space-y-2">
          <DInput prefix="￥" suffix="RMB" />
          <DInput
            v-slots={{
              prefix: () => <span>￥</span>,
              suffix: () => <span>RMB</span>,
            }}
          />
        </div>

        <div class="py-4 space-y-2">
          <DInput type="text" addonBefore="https://" addonAfter=".com" />
          <DInput
            type="text"
            v-slots={{
              addonBefore: () => <span>https://</span>,
              addonAfter: () => <span>.com</span>,
            }}
          />
        </div>

        <div class="py-4 space-y-2">
          <DInput type="text" placeholder="type='text'" />
          <DInput type="password" placeholder="type='password'" />
        </div>

        <div class="py-4 space-y-2">
          <DInput size="large" placeholder="large size" />
          <DInput placeholder="default size" />
          <DInput size="small" placeholder="small size" />
        </div>

        <div class="py-4 space-y-2">
          <DInput type="text" placeholder="attrs" data-size="haha" />
        </div>
      </div>
    )
  },
})
