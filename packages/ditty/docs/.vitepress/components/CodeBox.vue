<template>
  <div class="code-box border my-8 rounded-sm hover:border-gray-200">
    <div class="p-4">
      <slot name="default" />

      <div class="my-4">
        <slot name="demo" />
      </div>
    </div>

    <div
      class="p-3 flex justify-center items-center border-t border-dashed"
      :class="{ 'border-b': showCode }"
    >
      <button class="border-0 focus:outline-none" @click="switchCode">
        {{ switchText }}
      </button>
    </div>

    <slot v-if="showCode" name="code" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CodeBox',
  setup() {
    const showCode = ref<boolean>(false)
    const switchText = computed(() =>
      showCode.value ? '</> 收起代码' : '<> 显示代码'
    )

    function switchCode() {
      showCode.value = !showCode.value
    }

    return {
      showCode,
      switchText,
      switchCode,
    }
  },
})
</script>

<style>
.code-box [class*='language-'] {
  border-radius: 0 !important;
  margin: 0 !important;
}

.code-box h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-bottom: 0;
  font-weight: 500;
}
</style>
