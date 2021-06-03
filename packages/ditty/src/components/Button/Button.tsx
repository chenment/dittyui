import { computed, defineComponent, PropType } from 'vue'
import type { Color } from './useVariantClasses'
import type { Size } from './useSizeClasses'
import useVariantClasses from './useVariantClasses'
import useStateClasses from './useStateClasses'
import { useSizeClasses, useIconSizeClasses } from './useSizeClasses'
import { LoadingIcon } from '../icon'

const buttonClasses = [
  'inline-block',
  'align-middle',
  'text-center',
  // font
  'font-medium',
  // border
  'rounded',
  'border',
  'border-solid',
  'border-transparent',
  // background
  'bg-clip-padding',
  // transition
  'transition',
  'duration-150',
  'ease-in-out',
  // other
  'select-none',
  'focus:outline-none',
]

export default defineComponent({
  name: 'DButton',
  inheritAttrs: false,
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
    },
    text: {
      type: Boolean,
    },
    icon: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
    size: {
      type: String as PropType<Size>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  emits: ['click'],
  setup(props, { attrs, slots, emit }) {
    const isIconButton = computed(() => !!slots.icon && !slots.default)
    const isDisabled = computed(() => props.disabled === true)
    const isLoading = computed(() => props.loading === true)
    const variantClasses = useVariantClasses(props, isDisabled, isLoading)
    const stateClasses = useStateClasses(isDisabled, isLoading)
    const sizeClasses = useSizeClasses(props, isIconButton)
    const iconSizeClasses = useIconSizeClasses(props)

    const iconMargin = computed(() =>
      !!slots.default ? (props.icon === 'left' ? 'mr-2' : 'ml-2') : ''
    )

    return () => {
      const iconClasses = [
        'svg-icon',
        'inline-block',
        'leading-0',
        iconMargin.value,
        ...iconSizeClasses.value,
      ]
      let icon = slots.icon && <span class={iconClasses}>{slots.icon()}</span>
      icon = isLoading.value ? (
        <span class={iconClasses}>
          <LoadingIcon class="animate-spin" />
        </span>
      ) : (
        icon
      )

      return (
        <button
          type="button"
          class={[
            buttonClasses,
            isIconButton.value ? 'leading-0' : 'leading-normal',
            stateClasses.value,
            sizeClasses.value,
            variantClasses.value,
          ]}
          disabled={isDisabled.value}
          onClick={() => emit('click')}
        >
          {props.icon === 'right' && slots.default?.()}
          {icon}
          {props.icon === 'left' && slots.default?.()}
        </button>
      )
    }
  },
})
