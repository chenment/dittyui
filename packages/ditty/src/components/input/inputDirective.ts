import { ObjectDirective } from 'vue'

function onCompositionStart(e: Event) {
  ;(e.target as any).composing = true
}

function onCompositionEnd(e: Event) {
  const target = e.target as any
  if (!target.composing) return
  target.composing = false
  trigger(target, 'input')
}

function trigger(el: HTMLElement, type: string) {
  const e: Event = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

export function addEventListener(
  el: Element,
  event: string,
  handler: EventListener,
  options?: EventListenerOptions
) {
  el.addEventListener(event, handler, options)
}

export const inputComposingDirective: ObjectDirective<
  HTMLInputElement | HTMLTextAreaElement
> = {
  created(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart)
      addEventListener(el, 'compositionend', onCompositionEnd)
      // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.
      addEventListener(el, 'change', onCompositionEnd)
    }
  },
}
