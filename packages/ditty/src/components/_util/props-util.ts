export function getPropsSlot(slots: any, props: any, prop: string = 'default') {
  return slots[prop]?.() ?? props[prop]
}
