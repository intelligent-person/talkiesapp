import { mq } from './helpers'

const alignItemsAliases = {
  start: 'flex-start',
  end: 'flex-end'
}

const justifyContentAliases = {
  start: 'flex-start',
  end: 'flex-end',
  around: 'space-around',
  between: 'space-between',
  evenly: 'space-evenly'
}

export const alignItems = (align: string) => mq({
  alignItems: alignItemsAliases[align] || align
})

export const alignSelf = align => mq({
  alignSelf: align
})

export const justifyContent = justify => mq({
  justifyContent: justifyContentAliases[justify] || justify
})

export const flexDirection = direction => mq({
  flexDirection: direction
})
export const flex = mq({
  display: 'flex'
})

export const flexWrap = wrap => mq({
  flexWrap: wrap
})

export const flexBasis = basis => mq({
  flexBasis: basis
})

export const order = order => mq({
  order
})
