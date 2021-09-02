import {
  computed,
  defineComponent,
  PropType,
  ref,
  VNode,
  withDirectives,
  getCurrentInstance,
  watch,
} from 'vue'
import { inputComposingDirective } from './inputDirective'
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
    onInput: Function as PropType<(e: Event) => void>,
    onChange: Function as PropType<(e: Event) => void>,
    onFocus: Function as PropType<(e: FocusEvent) => void>,
    onBlur: Function as PropType<(e: Event) => void>,
    disabled: Boolean as PropType<boolean>,
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

    const vm = getCurrentInstance()!.proxy!

    const value = props.value === undefined ? '' : props.value
    const valueStateRef = ref(value === undefined ? '' : value)

    const inputRef = ref<HTMLInputElement | null>(null)

    watch(
      () => props.value,
      (value) => {
        if (value !== undefined) {
          valueStateRef.value = value
        }
      }
    )

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

    function handleChange(e: Event) {
      const { value, composing } = e.target as any
      if (valueStateRef.value === value || composing) return

      if (!('value' in props)) {
        valueStateRef.value = value
      } else {
        // force update to sync input's view with value
        // if not set, after input, input value won't sync with dom input value
        vm.$forceUpdate()
      }

      emit('update:value', value)
      emit('change', e)
      emit('input', e)
    }

    function handleFocus(e: FocusEvent) {
      isFocusRef.value = true
      props.onFocus?.(e)
    }

    function handleBlur(e: Event) {
      isFocusRef.value = false
      props.onBlur?.(e)
    }

    return {
      inputAffixClasses,
      paddingSizeClasses,
      fontSizeClasses,
      addonBeforeClasses,
      addonAfterClasses,
      inputRef,
      isDisabled,
      valueStateRef,
      hasAddonBefore,
      hasAddonAfter,
      hasPrefix,
      hasSuffix,
      handleFocus,
      handleBlur,
      handleChange,
    }
  },
  methods: {
    renderAddonBefore() {
      return this.hasAddonBefore ? (
        <span
          class={[
            this.addonBeforeClasses,
            this.paddingSizeClasses,
            this.fontSizeClasses,
          ]}
        >
          {this.$slots.addonBefore?.() || this.$props.addonBefore}
        </span>
      ) : null
    },
    renderAddonAfter() {
      return this.hasAddonAfter ? (
        <span
          class={[
            this.addonAfterClasses,
            this.paddingSizeClasses,
            this.paddingSizeClasses,
          ]}
        >
          {this.$slots.addonAfter?.() || this.$props.addonAfter}
        </span>
      ) : null
    },
    renderPrefix() {
      return this.hasPrefix ? (
        <span class={['flex mr-2']}>
          {this.$slots.prefix?.() || this.$props.prefix}
        </span>
      ) : null
    },
    renderSuffix() {
      return this.hasSuffix ? (
        <span class={['flex ml-2']}>
          {this.$slots.suffix?.() || this.$props.suffix}
        </span>
      ) : null
    },
    renderInput() {
      const inputNode: VNode = (
        <input
          ref={this.saveInputRef}
          class={[
            'inline-block w-full bg-transparent border-0 outline-none',
            { 'cursor-not-allowed': this.isDisabled },
          ]}
          type={this.$props.type}
          value={this.valueStateRef}
          placeholder={this.$props.placeholder}
          disabled={this.isDisabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleChange}
          onChange={this.handleChange}
          {...this.$attrs}
        />
      )

      return withDirectives(inputNode, [[inputComposingDirective]])
    },
    saveInputRef(input: any) {
      this.inputRef = input
    },
  },
  render() {
    return (
      <span class="inline-block w-full align-top">
        <span class="flex w-full">
          {this.renderAddonBefore()}
          <span
            class={[
              this.inputAffixClasses,
              this.paddingSizeClasses,
              this.fontSizeClasses,
            ]}
          >
            {this.renderPrefix()}
            {this.renderInput()}
            {this.renderSuffix()}
          </span>
          {this.renderAddonAfter()}
        </span>
      </span>
    )
  },
})
