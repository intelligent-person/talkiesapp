import { mq } from './helpers';

type Arguments = string | string[] | number | number[]

export const width = (width: Arguments) => mq({
  width
});

export const height = (height: Arguments) => mq({
  height
});

export const minHeight = (height: Arguments) => mq({
  minHeight: height
});

export const minWidth = (width: Arguments) => mq({
  minWidth: width
});

export const maxHeight = (height: Arguments) => mq({
  maxHeight: height
});

export const maxWidth = (width: Arguments) => mq({
  maxWidth: width
});

export const bgs = (backgroundSize: Arguments) => mq({
  backgroundSize
});
