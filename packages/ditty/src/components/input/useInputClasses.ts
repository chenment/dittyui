import { computed, Ref, ref, readonly } from 'vue'

function concat(...strs: string[]) {
  const splitter = ' '
  return strs.reduce((res, str) => (res += str + splitter), '')
}

export default function useInputClasses(
  hasAddonBefore: Ref<boolean>,
  hasAddonAfter: Ref<boolean>,
  isFocusRef: Ref<boolean>,
  isDisabled: Ref<boolean>
) {
  const inputPublicClasses = `leading-normal border bg-clip-padding`

  const addonClasses = `relative bg-gray-50 border-gray-300`

  const addonBeforeClasses = readonly(
    ref(concat(inputPublicClasses, addonClasses, `rounded-l border-r-0`))
  )

  const addonAfterClasses = readonly(
    ref(concat(inputPublicClasses, addonClasses, `rounded-r border-l-0`))
  )

  const inputAffixClasses = computed(() => {
    let res = `inline-flex w-full transition`
    res = concat(inputPublicClasses, res)
    res = concat(res, hasAddonBefore.value ? '' : 'rounded-l')
    res = concat(res, hasAddonAfter.value ? '' : 'rounded-r')
    res = concat(res, isFocusRef.value ? 'border-gray-400' : 'border-gray-300')
    res = concat(
      res,
      isDisabled.value ? 'cursor-not-allowed' : '',
      isDisabled.value ? 'bg-gray-100' : 'bg-white'
    )

    return res
  })

  return {
    addonBeforeClasses,
    addonAfterClasses,
    inputAffixClasses,
  }
}
