import { computed, Ref } from 'vue'

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'

interface VariantType {
  default: string[]
  outlined: string[]
  text: string[]
}

const themeColors: Record<Color, VariantType> = {
  primary: {
    default: [
      'bg-blue-500',
      'border-blue-500',
      'text-white',
      'hover:bg-blue-600',
      'hover:border-blue-600',
      'focus:bg-blue-600',
      'focus:border-blue-600',
    ],
    outlined: [
      'bg-transparent',
      'border-blue-500',
      'text-blue-500',
      'hover:bg-blue-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-blue-500',
      'hover:bg-blue-500',
      'hover:border-blue-500',
      'focus:bg-blue-500',
      'focus:border-blue-500',
    ],
  },
  secondary: {
    default: [
      'border-gray-500',
      'bg-gray-500',
      'text-white',
      'hover:bg-gray-600',
      'hover:border-gray-600',
      'focus:bg-gray-600',
      'focus:border-gray-600',
    ],
    outlined: [
      'bg-transparent',
      'text-gray-500',
      'border-gray-500',
      'hover:bg-gray-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-gray-500',
      'hover:bg-gray-500',
      'hover:border-gray-500',
      'focus:bg-gray-500',
      'focus:border-gray-500',
    ],
  },
  success: {
    default: [
      'border-green-500',
      'bg-green-500',
      'text-white',
      'hover:bg-green-600',
      'hover:border-green-600',
      'focus:bg-green-600',
      'focus:border-green-600',
    ],
    outlined: [
      'bg-transparent',
      'text-green-500',
      'border-green-500',
      'hover:bg-green-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-green-500',
      'hover:bg-green-500',
      'hover:border-green-500',
      'focus:bg-green-500',
      'focus:border-green-500',
    ],
  },
  info: {
    default: [
      'border-cyan-500',
      'bg-cyan-500',
      'text-white',
      'hover:bg-cyan-600',
      'hover:border-cyan-600',
      'focus:bg-cyan-600',
      'focus:border-cyan-600',
    ],
    outlined: [
      'bg-transparent',
      'text-cyan-500',
      'border-cyan-500',
      'hover:bg-cyan-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-cyan-500',
      'hover:bg-cyan-500',
      'hover:border-cyan-500',
      'focus:bg-cyan-500',
      'focus:border-cyan-500',
    ],
  },
  warning: {
    default: [
      'border-yellow-500',
      'bg-yellow-500',
      'text-white',
      'hover:bg-yellow-600',
      'hover:border-yellow-600',
      'focus:bg-yellow-600',
      'focus:border-yellow-600',
    ],
    outlined: [
      'bg-transparent',
      'text-yellow-500',
      'border-yellow-500',
      'hover:bg-yellow-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-yellow-500',
      'hover:bg-yellow-500',
      'hover:border-yellow-500',
      'focus:bg-yellow-500',
      'focus:border-yellow-500',
    ],
  },
  danger: {
    default: [
      'border-red-500',
      'bg-red-500',
      'text-white',
      'hover:bg-red-600',
      'hover:border-red-600',
      'focus:bg-red-600',
      'focus:border-red-600',
    ],
    outlined: [
      'bg-transparent',
      'text-red-500',
      'border-red-500',
      'hover:bg-red-500',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-red-500',
      'hover:bg-red-500',
      'hover:border-red-500',
      'focus:bg-red-500',
      'focus:border-red-500',
    ],
  },
  dark: {
    default: [
      'border-gray-800',
      'bg-gray-800',
      'text-white',
      'hover:bg-gray-900',
      'hover:border-gray-900',
      'focus:bg-gray-900',
      'focus:border-gray-900',
    ],
    outlined: [
      'bg-transparent',
      'text-gray-800',
      'border-gray-800',
      'hover:bg-gray-800',
      'hover:text-white',
    ],
    text: [
      'bg-transparent',
      'text-gray-800',
      'hover:bg-gray-800',
      'hover:border-gray-800',
      'focus:bg-gray-800',
      'focus:border-gray-800',
    ],
  },
  light: {
    default: [
      'border-gray-50',
      'bg-gray-50',
      'text-black',
      'hover:bg-gray-200',
      'hover:border-gray-200',
      'focus:bg-gray-200',
      'focus:border-gray-200',
    ],
    outlined: [
      'bg-transparent',
      'text-gray-50',
      'border-gray-50',
      'hover:bg-gray-50',
      'hover:text-gray-800',
    ],
    text: [
      'bg-transparent',
      'text-gray-50',
      'hover:bg-gray-50',
      'hover:border-gray-50',
      'focus:bg-gray-50',
      'focus:border-gray-50',
    ],
  },
}

interface ButtonProps {
  color: Color
  outlined: boolean
  text: boolean
  disabled: boolean
}

export default function useColor(
  props: ButtonProps,
  isDisabled: Ref<boolean>,
  isLoading: Ref<boolean>
) {
  return computed(() => {
    let color: Color = props.color in themeColors ? props.color : 'primary'
    let variant: keyof VariantType
    const classes: string[] = []

    if (props.text && !props.outlined) {
      variant = 'text'
      classes.push(
        ...[
          'hover:bg-opacity-10',
          'hover:border-opacity-10',
          'focus:bg-opacity-10',
          'focus:border-opacity-10',
        ]
      )
    } else if (props.outlined && !props.text) {
      variant = 'outlined'
    } else {
      // TODO: 提示只能选择一种variant
      variant = 'default'
    }

    let variantClasses = themeColors[color][variant]

    // Remove hover/focus classes if disabled or loading state
    variantClasses =
      isDisabled.value || isLoading.value
        ? variantClasses.filter(
            (classStr) => !classStr.match(/^(focus\:|hover\:)/)
          )
        : variantClasses

    classes.push(...variantClasses)

    return classes
  })
}
