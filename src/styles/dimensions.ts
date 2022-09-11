import { mq } from './helpers';

export const width = width => mq({
  width
});

export const height = height => mq({
  height
});

export const minHeight = height => mq({
  minHeight: height
});

export const minWidth = width => mq({
  minWidth: width
});

export const maxHeight = height => mq({
  maxHeight: height
});

export const maxWidth = width => mq({
  maxWidth: width
});

export const bgs = backgroundSize => mq({
  backgroundSize
});
