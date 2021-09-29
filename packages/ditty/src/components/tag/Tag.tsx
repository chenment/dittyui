import { defineComponent, ref, watchEffect } from 'vue'
import { CloseOutlinedIcon } from '../_util/icons'
import { useClasses } from './useClasses'

// Tag
// props: closable, color, visible(v-model)
// event: close

const Tag = defineComponent({
  name: 'DTag',
  emits: ['update:visible', 'close'],
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'default',
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots, emit }) {
    const visibleRef = ref(true)

    watchEffect(() => {
      if (props.visible !== undefined) {
        visibleRef.value = props.visible
      }
    })

    const handleCloseClick = (e: MouseEvent) => {
      e.stopPropagation()
      emit('update:visible', false)
      emit('close', e)

      if (e.defaultPrevented) return

      if (props.visible === undefined) {
        visibleRef.value = false
      }
    }

    return () => {
      const { closable, color } = props
      const { tagClass, closeIconClass, tagStyle, closeIconStyle } = useClasses(
        color || 'default',
        visibleRef.value
      ).value
      const renderCloseIcon = () => {
        if (!closable) return null
        return (
          <CloseOutlinedIcon
            class={['dt-tag-close-icon', closeIconClass]}
            style={closeIconStyle}
            onClick={handleCloseClick}
          />
        )
      }

      return (
        <span class={['dt-tag', tagClass]} style={tagStyle}>
          {slots.default?.()}
          {renderCloseIcon()}
        </span>
      )
    }
  },
})

export default Tag
