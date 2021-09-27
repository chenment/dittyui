export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
export type BreakpointMap = Partial<Record<Breakpoint, string>>
export type ScreenMap = Partial<Record<Breakpoint, boolean>>

export const breakpointArray: Breakpoint[] = [
  'xxl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
]

export const breakpointMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
}

function addListener(
  mql: MediaQueryList,
  handler: (this: MediaQueryList, e: MediaQueryListEvent) => void
) {
  if ('addEventListener' in mql) {
    mql.addEventListener('change', handler)
  } else {
    mql.addListener(handler)
  }
}

function removeHandler(
  mql: MediaQueryList,
  handler: (this: MediaQueryList, e: MediaQueryListEvent) => void
) {
  if ('removeEventListener' in mql) {
    mql.removeEventListener('change', handler)
  } else {
    mql.removeListener(handler)
  }
}

type SubscribeFn = (screens: ScreenMap) => void
const subscribers = new Map<number, SubscribeFn>()
let subUid = -1
// eg. { xs: false, sm: true, md: true, lg: false, xl: false, xxl: false }
let screens = {}

const responseObserve = {
  matchHandlers: {} as {
    [prop: string]: {
      mql: MediaQueryList
      handler: (this: MediaQueryList, e: MediaQueryListEvent) => void
    }
  },
  dispatch(pointMap: ScreenMap) {
    screens = pointMap
    subscribers.forEach((fn) => fn(screens))
    return subscribers.size > 1
  },
  subscribe(fn: SubscribeFn) {
    if (!subscribers.size) this.register()
    const token = ++subUid
    subscribers.set(token, fn)
    fn(screens)
    return token
  },
  unsubscribe(token: number) {
    subscribers.delete(token)
    if (!subscribers.size) this.unregister()
  },
  register() {
    Object.entries(breakpointMap).forEach(([screen, query]) => {
      const mql: MediaQueryList = window.matchMedia(query)
      const handler = (e: MediaQueryListEvent) => {
        this.dispatch({
          ...screens,
          [screen]: e.matches,
        })
      }

      addListener(mql, handler)
      this.matchHandlers[query] = { mql, handler }
      handler(mql as any)
    })
  },
  unregister() {
    Object.entries(breakpointMap).forEach(([screen, query]) => {
      const matchHandler = this.matchHandlers[query]
      removeHandler(matchHandler.mql, matchHandler.handler)
    })
    subscribers.clear()
  },
}

export default responseObserve
