import { mq } from './helpers'

export const p = padding => mq({
  padding
})

export const px = padding => mq({
  paddingLeft: padding,
  paddingRight: padding
})

export const pl = padding => mq({
  paddingLeft: padding
})

export const pr = padding => mq({
  paddingRight: padding
})

export const py = padding => mq({
  paddingTop: padding,
  paddingBottom: padding
})

export const pt = padding => mq({
  paddingTop: padding
})

export const pb = padding => mq({
  paddingBottom: padding
})

export const spt = padding => mq({
  scrollMargin: padding
})
