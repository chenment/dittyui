import { reactive, defineComponent, PropType } from 'vue'

import './btn.scss'

type HtmlType = 'button' | 'submit' | 'reset'
type Size = 'small' | 'medium' | 'large'
type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'
  | 'white'
  | 'dark'

export default defineComponent({
  name: 'DButton',
  props: {
    htmlType: {
      type: String as PropType<HtmlType>,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String as PropType<Color>,
      default: 'primary',
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  emits: ['click'],
  setup(props, { attrs, slots }) {
    // const btnColorClass = computed(() => `btn-${props.color}`)

    const classObj = reactive({
      'd-block': props.block,
      [`btn-${props.color}`]: true,
    })

    return () => (
      <button
        type={props.htmlType}
        disabled={props.disabled}
        onClick={props.onClick}
        class={classObj}
        {...attrs}
      >
        {slots.default && slots.default()}
      </button>
    )
  },
})
