import { computed, CSSProperties } from 'vue'
import { tw } from '../_util/tailwind-util'

export function useClasses(color: string, visible: boolean) {
  return computed(() => {
    const tagClass = tw.tail(
      'inline-block px-2 text-xs tabular-nums whitespace-nowrap leading-5 border rounded-sm'
    )
    const closeIconClass = tw.tail(
      'relative w-3 h-3 cursor-pointer ml-1 text-black text-opacity-50 hover:text-opacity-90'
    )
    let tagStyle: CSSProperties = {}
    const closeIconStyle = { top: '-0.05rem' }

    if (!visible) tw.add(tagClass, 'hidden')

    switch (color) {
      case 'default':
        tw.add(tagClass, ' bg-gray-50 border-gray-300')
        break
      case 'red':
      case 'error':
        tw.add(tagClass, 'bg-red-50 border-red-300 text-red-700')
        break
      case 'yellow':
      case 'warning':
        tw.add(tagClass, 'bg-yellow-50 border-yellow-300 text-yellow-700')
        break
      case 'green':
      case 'success':
        tw.add(tagClass, 'bg-green-50 border-green-300 text-green-700')
        break
      case 'blue':
      case 'processing':
        tw.add(tagClass, 'bg-blue-50 border-blue-300 text-blue-700')
        break
      case 'purple':
        tw.add(tagClass, 'bg-purple-50 border-purple-300 text-purple-700')
        break
      case 'pink':
        tw.add(tagClass, 'bg-pink-50 border-pink-300 text-pink-700')
        break
      case 'cyan':
        tw.add(tagClass, 'bg-cyan-50 border-cyan-300 text-cyan-700')
        break
      default:
        tw.add(tagClass, 'border-transparent text-white')
        tagStyle = { ...tagStyle, backgroundColor: color }
    }

    return {
      tagClass,
      closeIconClass,
      tagStyle,
      closeIconStyle,
    }
  })
}
