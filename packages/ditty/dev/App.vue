<template>
  <div class="app">
    <ButtonPg />
    <SFCPlayground />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonPg from './ButtonPg'
import SFCPlayground from './SFCPlayground.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonPg,
    SFCPlayground,
  },
})
</script>
