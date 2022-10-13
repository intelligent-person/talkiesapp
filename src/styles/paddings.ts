import { AllArguments, mq } from './helpers';

export const p = (padding: AllArguments) => mq({
  padding
});

export const px = (padding: AllArguments) => mq({
  paddingLeft: padding,
  paddingRight: padding
});

export const pl = (padding: AllArguments) => mq({
  paddingLeft: padding
});

export const pr = (padding: AllArguments) => mq({
  paddingRight: padding
});

export const py = (padding: AllArguments) => mq({
  paddingTop: padding,
  paddingBottom: padding
});

export const pt = (padding: AllArguments) => mq({
  paddingTop: padding
});

export const pb = (padding: AllArguments) => mq({
  paddingBottom: padding
});

export const spt = (padding: AllArguments) => mq({
  scrollMargin: padding
});
