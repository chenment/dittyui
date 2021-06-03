import { computed, Ref } from 'vue'

export default function useStateClasses(
  isDisabled: Ref<boolean>,
  isLoading: Ref<boolean>
) {
  return computed(() => {
    const classes = []
    if (isDisabled.value || isLoading.value) {
      classes.push('opacity-60')
    }
    const cursorClass = isDisabled.value
      ? 'cursor-not-allowed'
      : isLoading.value
      ? 'cursor-default'
      : 'cursor-pointer'
    classes.push(cursorClass)

    return classes
  })
}
