import { ref, getCurrentScope, onScopeDispose } from 'vue'

export function addListener(
  mql: MediaQueryList,
  handler: (e: MediaQueryListEvent) => void
) {
  if ('addEventListener' in mql) {
    mql.addEventListener('change', handler)
  } else {
    mql.addListener(handler)
  }
}

export function removeHandler(
  mql: MediaQueryList,
  handler: (e: MediaQueryListEvent) => void
) {
  if ('removeEventListener' in mql) {
    mql.removeEventListener('change', handler)
  } else {
    mql.removeListener(handler)
  }
}

export function useMediaQuery(query: string) {
  if (!window) return
  const mql: MediaQueryList = window.matchMedia(query)
  const matches = ref(mql.matches)

  const handler = (e: MediaQueryListEvent) => {
    matches.value = e.matches
  }

  addListener(mql, handler)

  if (getCurrentScope()) {
    onScopeDispose(() => {
      removeHandler(mql, handler)
    })
  }

  return { mql, handler, matches }
}
