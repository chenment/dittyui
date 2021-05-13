<template>
  <Playground />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Playground from './Playground'

export default defineComponent({
  name: 'App',
  components: {
    Playground,
  },
})
</script>
