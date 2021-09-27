export const tw = {
  tail: function (classes: string | string[]) {
    if (typeof classes === 'string') {
      if (classes === '') return []
      return classes.trim().split(/\s+/)
    } else {
      return classes
    }
  },
  add: function (classArr: string[], classes: string) {
    classArr.push(...this.tail(classes))
  },
}
