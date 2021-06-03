<template>
  <div class="p-4">
    <DButton color="success" @click="handleClick">SFC</DButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { DButton } from '../src/main'

export default defineComponent({
  components: { DButton },
  setup() {},
  methods: {
    handleClick() {
      console.log('danger')
    },
  },
})
</script>
