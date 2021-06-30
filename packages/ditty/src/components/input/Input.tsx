import { computed, defineComponent, onUpdated, PropType, ref } from 'vue'
import useInputClasses from './useInputClasses'

/**
 * props:
 * value(v-model)
 * type
 * prefix
 * suffix
 * addonBefore
 * addonAfter
 * clearable
 * disabled
 * placeholder
 * size
 *
 * events:
 * change
 * pressEnter
 *
 */

export default defineComponent({
  name: 'DInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
    },
    value: {
      type: String as PropType<string>,
    },
    modelValue: {
      type: String as PropType<string>,
    },
    addonBefore: {
      type: String as PropType<string>,
    },
    addonAfter: {
      type: String as PropType<string>,
    },
    prefix: {
      type: String as PropType<string>,
    },
    suffix: {
      type: String as PropType<string>,
    },
    placeholder: {
      type: String as PropType<string>,
    },
    onInput: {
      type: Function as PropType<(e: Event) => void>,
    },
    onChange: {
      type: Function as PropType<(e: Event) => void>,
    },
    onFocus: {
      type: Function as PropType<(e: FocusEvent) => void>,
    },
    onBlur: {
      type: Function as PropType<(e: Event) => void>,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
    },
    // clearable: {
    //   type: Boolean as PropType<boolean>,
    // },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: () => 'default',
    },
  },
  setup(props, { slots, emit, attrs }) {
    // if we have addonBefore prop and addonBefore slot at the same time, use slot define first
    // TODO: And warning (the same with addonAfter, prefix, suffix)

    const value = props.value === undefined ? props.modelValue : props.value
    const valueRef = ref(value === undefined ? '' : value)

    const hasAddonBefore = computed(
      () => !!slots.addonBefore || !!props.addonBefore
    )
    const hasAddonAfter = computed(
      () => !!slots.addonAfter || !!props.addonAfter
    )
    const hasPrefix = computed(() => !!slots.prefix || !!props.prefix)
    const hasSuffix = computed(() => !!slots.suffix || !!props.suffix)
    const isFocusRef = ref(false)
    const isDisabled = computed(() => !!props.disabled)

    const paddingSizeClasses = computed(() => {
      switch (props.size) {
        case 'large':
          return 'py-3 px-3.5'
        case 'small':
          return 'py-0.5 px-3.5'
        default:
          return 'py-2 px-3.5'
      }
    })

    const fontSizeClasses = computed(() =>
      props.size === 'default'
        ? 'text-base'
        : props.size === 'large'
        ? 'text-lg'
        : 'text-base'
    )

    const { addonBeforeClasses, addonAfterClasses, inputAffixClasses } =
      useInputClasses(hasAddonBefore, hasAddonAfter, isFocusRef, isDisabled)

    const addonBefore = computed(() =>
      hasAddonBefore.value ? (
        <span
          class={[
            addonBeforeClasses.value,
            paddingSizeClasses.value,
            fontSizeClasses.value,
          ]}
        >
          {slots.addonBefore?.() || props.addonBefore}
        </span>
      ) : null
    )

    const addonAfter = computed(() =>
      hasAddonAfter.value ? (
        <span
          class={[
            addonAfterClasses.value,
            paddingSizeClasses.value,
            paddingSizeClasses.value,
          ]}
        >
          {slots.addonAfter?.() || props.addonAfter}
        </span>
      ) : null
    )

    const prefix = computed(() =>
      hasPrefix.value ? (
        <span class={['flex mr-2']}>{slots.prefix?.() || props.prefix}</span>
      ) : null
    )

    const suffix = computed(() =>
      hasSuffix.value ? (
        <span class={['flex ml-2']}>{slots.suffix?.() || props.suffix}</span>
      ) : null
    )

    const handleInput = (e: Event) => {
      console.log('handleInput', (e.target as HTMLInputElement).value)
      emit('update:modelValue', (e.target as HTMLInputElement).value)
      valueRef.value = (e.target as HTMLInputElement).value
    }

    const handleChange = (e: Event) => {
      console.log('handleChange', (e.target as HTMLInputElement).value)
      props.onChange?.(e)
    }

    const handleFocus = (e: FocusEvent) => {
      console.log('handleFocus', (e.target as HTMLInputElement).value)
      isFocusRef.value = true
      props.onFocus?.(e)
    }

    const handleBlur = (e: Event) => {
      console.log('handleBlur', (e.target as HTMLInputElement).value)
      isFocusRef.value = false
      props.onBlur?.(e)
    }

    return () => {
      return (
        <span class="inline-block w-full align-top">
          <span class="flex w-full">
            {addonBefore.value}
            <span
              class={[
                inputAffixClasses.value,
                paddingSizeClasses.value,
                fontSizeClasses.value,
              ]}
            >
              {prefix.value}
              <input
                class={[
                  'inline-block w-full bg-transparent border-0 outline-none',
                  { 'cursor-not-allowed': isDisabled.value },
                ]}
                type={props.type}
                value={valueRef.value}
                placeholder={props.placeholder}
                disabled={isDisabled.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInput={handleInput}
                onChange={handleChange}
                {...attrs}
              />
              {suffix.value}
            </span>
            {addonAfter.value}
          </span>
        </span>
      )
    }
  },
})
