<template>
  <div :style="{ height: `${value}px`, lineHeight: `${value}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DemoBox',
  props: {
    value: Number,
  },
}
</script>
