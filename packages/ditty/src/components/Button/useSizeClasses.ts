import { computed, Ref } from 'vue'

export type Size = 'default' | 'large' | 'small'

interface ButtonProp {
  size: Size
}

export function useSizeClasses(props: ButtonProp, isIconButton: Ref<boolean>) {
  return computed(() => {
    switch (props.size) {
      case 'large':
        return isIconButton.value
          ? ['px-2', 'py-2']
          : ['px-4', 'py-2', 'text-xl']
      case 'small':
        return isIconButton.value
          ? ['px-1', 'py-1']
          : ['px-2', 'py-1', 'text-sm']
      default:
        return isIconButton.value
          ? ['px-1.5', 'py-1.5']
          : ['px-3', 'py-1.5', 'text-base']
    }
  })
}

export function useIconSizeClasses(props: ButtonProp) {
  // FIX: 图标按钮和带文字按钮高度不一致
  return computed(() => {
    switch (props.size) {
      case 'large':
        return ['w-7', 'h-7']
      case 'small':
        return ['w-5', 'h-5']
      default:
        return ['w-6', 'h-6']
    }
  })
}
