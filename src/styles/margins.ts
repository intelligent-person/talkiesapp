import { AllArguments, mq } from './helpers';

export const m = (margin: AllArguments) => mq({
  margin
});

export const mx = (margin: AllArguments) => mq({
  marginLeft: margin,
  marginRight: margin
});

export const ml = (margin: AllArguments) => mq({
  marginLeft: margin
});

export const mr = (margin: AllArguments) => mq({
  marginRight: margin
});

export const my = (margin: AllArguments) => mq({
  marginTop: margin,
  marginBottom: margin
});

export const mt = (margin: AllArguments) => mq({
  marginTop: margin
});

export const mb = (margin: AllArguments) => mq({
  marginBottom: margin
});
