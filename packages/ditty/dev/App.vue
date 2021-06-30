<template>
  <div class="app">
    <!-- <ButtonPg /> -->
    <InputPg />
    <!-- <SFCPlayground /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import ButtonPg from './ButtonPg'
import InputPg from './InputPg'

export default defineComponent({
  name: 'App',
  components: {
    ButtonPg,
    InputPg,
  },
  setup() {
    provide('hello', 'world')
  },
})
</script>
