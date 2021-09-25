import { defineComponent, PropType, computed, reactive, provide } from 'vue'
import { useBreakPoint, breakpointArray } from '../_util/hooks/useBreakPoint'
import type { Breakpoint, ScreenMap } from '../_util/hooks/useBreakPoint'

export type Gutter = number | Partial<Record<Breakpoint, number>>

export interface RowContext {
  gutter?: [number, number]
  screens?: ScreenMap
}

const props = {
  gutter: {
    type: [Number, Object, Array] as PropType<Gutter | [Gutter, Gutter]>,
  },
  justify: {
    type: String as PropType<
      'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'
    >,
    default: () => 'start',
  },
  align: {
    type: String as PropType<'top' | 'middle' | 'bottom'>,
    default: () => 'top',
  },
  wrap: {
    type: Boolean as PropType<boolean>,
    default: () => true,
  },
}

export default defineComponent({
  name: 'DRow',
  props,
  setup(props, { slots }) {
    const screensRef = useBreakPoint()

    const gutterRef = computed(() => {
      const result: [number, number] = [0, 0]
      const { gutter } = props
      const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0]
      normalizedGutter.forEach((g, index) => {
        if (typeof g !== 'object') {
          result[index] = g || 0
        } else {
          for (let i = 0; i < breakpointArray.length; i++) {
            const breakpoint: Breakpoint = breakpointArray[i]
            if (screensRef.value[breakpoint] && g[breakpoint] !== undefined) {
              result[index] = g[breakpoint] as number
              break
            }
          }
        }
      })

      return result
    })

    const classes = computed(() => {
      const { justify, align, wrap } = props

      let justifyCls = ''
      switch (justify) {
        case 'start':
          justifyCls = 'justify-start'
          break
        case 'end':
          justifyCls = 'justify-end'
          break
        case 'center':
          justifyCls = 'justify-center'
          break
        case 'around':
          justifyCls = 'justify-around'
          break
        case 'between':
          justifyCls = 'justify-between'
          break
        case 'evenly':
          justifyCls = 'justify-evenly'
          break
        default:
          justifyCls = ''
      }

      let alignCls = ''
      switch (align) {
        case 'top':
          alignCls = 'items-start'
          break
        case 'middle':
          alignCls = 'items-center'
          break
        case 'bottom':
          alignCls = 'items-end'
          break
        default:
          alignCls = ''
      }

      const wrapCls = wrap ? 'flex-wrap' : 'flex-nowrap'

      return ['flex', justifyCls, alignCls, wrapCls]
    })

    const rowStyle = computed(() => {
      const [xGutter, yGutter] = gutterRef.value

      return {
        ...(xGutter > 0
          ? {
              marginLeft: `${xGutter / -2}px`,
              marginRight: `${xGutter / -2}px`,
            }
          : {}),
        ...(yGutter > 0
          ? {
              marginTop: `${yGutter / -2}px`,
              marginBottom: `${yGutter / -2}px`,
            }
          : {}),
      }
    })

    const rowContext = reactive({
      gutter: gutterRef,
      screens: screensRef,
    })

    provide('rowContext', rowContext)

    return () => (
      <div class={['dt-row', classes.value]} style={rowStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})
