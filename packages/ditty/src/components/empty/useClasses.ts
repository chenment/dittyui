import { computed } from 'vue'
import { tw } from '../_util/tailwind-util'

export function useClasses() {
  return computed(() => {
    return {
      emptyClass: tw.tail(
        'font-sm text-center text-black text-opacity-25 my-8'
      ),
      emptyImageClass: tw.tail('h-10 mb-2'),
      emptyFooterClass: tw.tail('mt-4'),
    }
  })
}
