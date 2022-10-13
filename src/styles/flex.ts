import { mq } from './helpers';
import { AlignItems } from '../types';

type Argument = string | string[]

const alignItemsAliases = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center'
};

export const alignItems = (align: AlignItems) => mq({
  alignItems: alignItemsAliases[align]
});

export const alignSelf = (align: Argument) => mq({
  alignSelf: align
});

export const justifyContent = (justify: Argument) => mq({
  justifyContent: justify
});

export const flexDirection = (direction: Argument) => mq({
  flexDirection: direction
});
export const flex = mq({
  display: 'flex'
});

export const flexWrap = (wrap: Argument) => mq({
  flexWrap: wrap
});

export const flexBasis = (basis: Argument) => mq({
  flexBasis: basis
});

export const order = (order: Argument) => mq({
  order
});
