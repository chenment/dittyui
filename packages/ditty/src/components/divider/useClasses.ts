import { computed, VNode } from 'vue'
import { tw } from '../_util/tailwind-util'

export function useClasses(props: any, children: VNode[]) {
  return computed(() => {
    const { dash, vertical, orientation } = props

    const result = {
      dividerClasses: tw.tail(
        'm-0 p-0 text-black text-opacity-80 tabular-nums leading-6 list-none'
      ),
      dividerInnerClasses: tw.tail('inline-block px-4'),
      dividerLineClass: tw.tail(
        'm-0 border-black border-opacity-10 border-t transform translate-y-1/2 relative top-1/2'
      ),
      dividerLineLeftClasses: tw.tail(''),
      dividerLineRightClasses: tw.tail(''),
      dividerStyle: {} as any,
    }

    if (!vertical) {
      // horizontal
      if (children.length > 0) {
        // has inner text
        tw.add(
          result.dividerClasses,
          'flex font-base font-semibold whitespace-nowrap my-4'
        )

        if (orientation === 'center') {
          tw.add(result.dividerLineLeftClasses, 'w-1/2')
          tw.add(result.dividerLineRightClasses, 'w-1/2')
        } else if (orientation === 'left') {
          tw.add(result.dividerLineLeftClasses, 'w-8')
          tw.add(result.dividerLineRightClasses, 'w-full')
        } else {
          tw.add(result.dividerLineLeftClasses, 'w-full')
          tw.add(result.dividerLineRightClasses, 'w-8')
        }
      } else {
        tw.add(
          result.dividerClasses,
          'border-black border-opacity-10 border-t w-full min-h-full my-6'
        )
      }
    } else {
      // vertical
      tw.add(
        result.dividerClasses,
        'border-l mx-2 relative inline-block h-4 align-middle'
      )
      result.dividerStyle.top = '-0.1rem'
    }

    return result
  })
}
