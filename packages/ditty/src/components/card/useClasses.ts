import { computed } from 'vue'
import { tw } from '../_util/tailwind-util'

export interface CardClasses {
  cardClass: string[]
  cardHeadClass: string[]
  cardHeadWrapperClass: string[]
  cardTitleClass: string[]
  cardExtraClass: string[]
  cardCoverClass: string[]
  cardBodyClass: string[]
  cardActionClass: string[]
}

export function useClasses(props: any) {
  return computed(() => {
    const classes: CardClasses = {
      cardClass: tw.tail('relative rounded bg-white m-0 p-0 text-sm'),
      cardHeadClass: tw.tail('px-6 text-base font-medium border-b round-t'),
      cardHeadWrapperClass: tw.tail('flex items-center'),
      cardTitleClass: tw.tail(
        'inline-block flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis'
      ),
      cardExtraClass: tw.tail('float-right ml-auto font-normal text-sm'),
      cardCoverClass: tw.tail('overflow-hidden rounded-t -mt-px -mx-px'),
      cardBodyClass: tw.tail('p-6'),
      cardActionClass: tw.tail('border-t py-4 px-6 bg-gray-50'),
    }

    if (props.bordered) tw.add(classes.cardClass, 'border')
    if (props.hoverable) {
      tw.add(
        classes.cardClass,
        'hover:cursor-pointer hover:shadow-md hover:border-opacity-10'
      )
    }

    return classes
  })
}
