import { defineComponent, PropType, computed, inject, ref } from 'vue'
import { breakpointArray } from '../_util/hooks/useBreakPoint'
import type { RowContext } from './Row'

type FlexType = number | 'auto' | 'none' | string

interface ColScreenProps {
  flex?: FlexType
  offset?: number
  order?: number
  pull?: number
  push?: number
  span?: number
}

const props = {
  flex: [String, Number] as PropType<FlexType>,
  offset: {
    type: Number as PropType<number>,
    default: () => 0,
  },
  order: {
    type: Number as PropType<number>,
    default: () => 0,
  },
  pull: {
    type: Number as PropType<number>,
    default: () => 0,
  },
  push: {
    type: Number as PropType<number>,
    default: () => 0,
  },
  span: Number as PropType<number>,
  xs: [Number, Object] as PropType<number | ColScreenProps>,
  sm: [Number, Object] as PropType<number | ColScreenProps>,
  md: [Number, Object] as PropType<number | ColScreenProps>,
  lg: [Number, Object] as PropType<number | ColScreenProps>,
  xl: [Number, Object] as PropType<number | ColScreenProps>,
  xxl: [Number, Object] as PropType<number | ColScreenProps>,
}

function parseFlex(flex: FlexType) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex
}

export default defineComponent({
  name: 'DCol',
  props,
  setup(props, { slots }) {
    const rowContext = inject<RowContext>('rowContext', {})

    const screenPropsRef = computed<ColScreenProps>(() => {
      const { flex, offset, order, pull, push, span } = props
      let result: ColScreenProps = { flex, offset, order, pull, push, span }

      result = breakpointArray.reduceRight((lastResult, screen) => {
        if (screen === 'xs' || rowContext.screens?.[screen]) {
          if (typeof props[screen] === 'number') {
            return { ...lastResult, span: props[screen] } as ColScreenProps
          } else if (typeof props[screen] === 'object') {
            return { ...lastResult, ...(props[screen] as ColScreenProps) }
          }
        }
        return lastResult
      }, result)

      return result
    })

    const colStyle = computed(() => {
      const { gutter } = rowContext

      let result: any = { minHeight: '1px' }

      if (gutter) {
        result = {
          ...result,
          ...(gutter[0] > 0
            ? {
                paddingLeft: `${gutter[0] / 2}px`,
                paddingRight: `${gutter[0] / 2}px`,
              }
            : {}),
          ...(gutter[1] > 0
            ? {
                paddingTop: `${gutter[1] / 2}px`,
                paddingBottom: `${gutter[1] / 2}px`,
              }
            : {}),
        }
      }

      const { span, flex, offset, push, pull, order } = screenPropsRef.value

      if (span !== undefined) {
        if (span === 0) {
          result.display = 'none'
        } else {
          result.flex = `0 0 ${(span / 24) * 100}%`
          result.maxWidth = `${(span / 24) * 100}%`
        }
      } else if (flex !== undefined) {
        result.flex = parseFlex(flex)
      }

      if (offset !== undefined && offset > 0) {
        result.marginLeft = `${(offset / 24) * 100}%`
      }

      if (push !== undefined && push > 0) {
        result.left = `${(push / 24) * 100}%`
      }

      if (pull !== undefined && pull > 0) {
        result.right = `${(pull / 24) * 100}%`
      }

      if (order !== undefined) {
        result.order = order
      }

      return result
    })

    return () => (
      <div class="dt-col relative max-w-full" style={colStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})
