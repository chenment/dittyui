export function getTransitionProps(transitionName: string, opt: object = {}) {
  const transitionProps = transitionName
    ? {
        appear: true,

        ...opt,
      }
    : { css: false, ...opt }

  return transitionProps
}
