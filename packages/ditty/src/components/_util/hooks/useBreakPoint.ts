import { ref, effectScope, onScopeDispose } from 'vue'
import responseObserve, { ScreenMap } from '../responsiveObserve'
export type { Breakpoint, ScreenMap } from '../responsiveObserve'
export { breakpointArray } from '../responsiveObserve'

export function useBreakPoint() {
  const scope = effectScope()

  const screensRef = ref<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  })

  const token = responseObserve.subscribe((screens) => {
    screensRef.value = screens
  })

  scope.run(() => {
    onScopeDispose(() => {
      console.log('onScopeDispose()')
      responseObserve.unsubscribe(token)
    })
  })

  return screensRef
}
