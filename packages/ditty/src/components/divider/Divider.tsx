import { defineComponent, PropType } from 'vue'
import { useClasses } from './useClasses'

// props: dash, vertical, orientation, plain
export default defineComponent({
  name: 'DDivider',
  props: {
    dash: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    vertical: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    orientation: {
      type: String as PropType<'left' | 'right' | 'center'>,
      default: 'center',
    },
  },
  setup(props, { slots }) {
    const children = slots.default?.() || []

    const classes = useClasses(props, children)

    return () => {
      const {
        dividerClasses,
        dividerInnerClasses,
        dividerLineClass,
        dividerLineLeftClasses,
        dividerLineRightClasses,
        dividerStyle,
      } = classes.value

      return (
        <div
          class={['dt-divider', dividerClasses]}
          style={dividerStyle}
          role="separator"
        >
          {!props.vertical && children && children.length > 0 ? (
            <>
              <span
                class={[
                  'dt-divider-line--left',
                  dividerLineClass,
                  dividerLineLeftClasses,
                ]}
              ></span>
              <span class={['dt-divider-text', dividerInnerClasses]}>
                {children}
              </span>
              <span
                class={[
                  'dt-divider-line--right',
                  dividerLineClass,
                  dividerLineRightClasses,
                ]}
              ></span>
            </>
          ) : null}
        </div>
      )
    }
  },
})
