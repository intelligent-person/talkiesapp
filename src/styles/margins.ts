import { mq } from './helpers'

export const m = margin => mq({
  margin
})

export const mx = margin => mq({
  marginLeft: margin,
  marginRight: margin
})

export const ml = margin => mq({
  marginLeft: margin
})

export const mr = margin => mq({
  marginRight: margin
})

export const my = margin => mq({
  marginTop: margin,
  marginBottom: margin
})

export const mt = margin => mq({
  marginTop: margin
})

export const mb = margin => mq({
  marginBottom: margin
})
