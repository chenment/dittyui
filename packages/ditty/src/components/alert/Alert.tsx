import { defineComponent, PropType, computed, ref } from 'vue'
import {
  CloseOutlinedIcon,
  SuccessIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  SuccessOutlinedIcon,
  InfoOutlinedIcon,
  WarningOutlinedIcon,
  ErrorOutlinedIcon,
} from '../_util/icons'
import { getPropsSlot } from '../_util/props-util'

const iconMapFilled = {
  success: SuccessIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
}

const iconMapOutlined = {
  success: SuccessOutlinedIcon,
  info: InfoOutlinedIcon,
  warning: WarningOutlinedIcon,
  error: ErrorOutlinedIcon,
}

const iconColorClassMap = {
  success: 'text-green-500',
  info: 'text-blue-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
}

export default defineComponent({
  name: 'DAlert',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<'success' | 'info' | 'warning' | 'error'>,
      default: 'info',
    },
    message: String as PropType<string>,
    description: String as PropType<string>,
    banner: Boolean as PropType<boolean>,
    closable: Boolean as PropType<boolean>,
    onClose: Function as PropType<(e: MouseEvent) => void>,
  },
  setup(props, { attrs, slots }) {
    const closed = ref(false)

    const colorClasses = computed(() => {
      switch (props.type) {
        case 'success':
          return ['border-green-200', 'bg-green-50']
        case 'warning':
          return ['border-yellow-200', 'bg-yellow-50']
        case 'error':
          return ['border-red-200', 'bg-red-50']
        default:
          return ['border-blue-200', 'bg-blue-50']
      }
    })

    function handleClose(e: MouseEvent) {
      e.preventDefault()
      props.onClose?.(e)
      closed.value = true
    }

    return () => {
      const { type, banner, closable } = props

      const message = getPropsSlot(slots, props, 'message')
      const description = getPropsSlot(slots, props, 'description')

      const closeIcon = closable ? (
        <CloseOutlinedIcon
          class="w-4 h-4 cursor-pointer ml-2 text-black text-opacity-50 hover:text-opacity-100"
          onClick={handleClose}
        />
      ) : null
      const IconType =
        (description ? iconMapOutlined : iconMapFilled)[type] || null

      return closed.value ? null : (
        <div
          class={[
            'flex',
            'px-4',
            banner ? '' : 'border',
            banner ? '' : 'rounded',
            description ? 'py-4' : 'py-2',
            description ? 'items-start' : 'items-center',
            ...colorClasses.value,
          ]}
          {...attrs}
        >
          <span
            class={[
              'leading-none',
              description ? 'w-8' : 'w-4',
              description ? 'w-8' : 'h-4',
              description ? 'mr-4' : 'mr-2',
              description ? '-mt-1' : '-mt-0.5',
              iconColorClassMap[type],
            ]}
          >
            {slots.icon?.() || <IconType />}
          </span>
          <div class={['flex-1']}>
            <div class={['block', 'text-base', { 'mb-1': !!description }]}>
              {message}
            </div>
            <div class={['block', 'text-sm']}>{description}</div>
          </div>
          {closeIcon}
        </div>
      )
    }
  },
})
