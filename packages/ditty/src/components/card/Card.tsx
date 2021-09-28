import { defineComponent, PropType, cloneVNode } from 'vue'
import { getPropsSlot } from '../_util/props-util'
import { useClasses } from './useClasses'

// Card
// props: bordered, hoverable, title, extra
// slots: cover, actions, title, extra

// Card Meta
// props: avatar, title, description
// slots: title, description
export default defineComponent({
  name: 'DCard',
  props: {
    title: String as PropType<string>,
    extra: String as PropType<string>,
    bordered: {
      type: Boolean as PropType<boolean>,
      default: () => true,
    },
    hoverable: {
      type: Boolean as PropType<boolean>,
      default: () => false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.()

      const title = getPropsSlot(slots, props, 'title')
      const extra = getPropsSlot(slots, props, 'extra')
      const cover = slots.cover?.()
      const action = slots.action?.()

      let clonedCover = null

      if (cover && cover.length > 0) {
        clonedCover = cover.map((child) =>
          cloneVNode(child, { class: 'block w-full' })
        )
      }

      const {
        cardClass,
        cardHeadWrapperClass,
        cardHeadClass,
        cardTitleClass,
        cardExtraClass,
        cardCoverClass,
        cardBodyClass,
        cardActionClass,
      } = useClasses(props).value

      return (
        <div class={['dt-card', cardClass]}>
          {title && !cover ? (
            <div
              class={['dt-card-head', cardHeadClass]}
              style="min-height: 48px"
            >
              <div
                class={['dt-card-head-wrapper', cardHeadWrapperClass]}
                style="min-height: 48px"
              >
                <div class={['dt-card-title', cardTitleClass]}>{title}</div>
                <div class={['dt-card-extra', cardExtraClass]}>{extra}</div>
              </div>
            </div>
          ) : null}

          {cover ? <div class={cardCoverClass}>{clonedCover}</div> : null}

          {children ? (
            <div class={['dt-card-body', cardBodyClass]}>{children}</div>
          ) : null}

          {action ? (
            <div class={['dt-card-action', cardActionClass]}>{action}</div>
          ) : null}
        </div>
      )
    }
  },
})
