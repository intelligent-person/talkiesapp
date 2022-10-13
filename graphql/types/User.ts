import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition (t) {
    t.nonNull.string('id');
    t.string('name');
    t.nonNull.string('email');
    t.string('password');
    t.string('provider');
    // @ts-expect-error
    t.dateTime('createdAt');
    t.string('image');
  }
});
