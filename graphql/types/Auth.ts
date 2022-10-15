import { mutationType, nonNull, objectType, queryType, stringArg } from 'nexus';
import { Context } from '../context/context';
import { hash } from 'bcryptjs';
import { ApolloError } from 'apollo-server-micro';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition (t) {
    t.string('token');
    t.field('user', {
      type: 'User'
    });
  }
});

export const Query = queryType({
  definition (t) {
    t.nonNull.field('me', {
      type: 'User',
      args: {},
      async resolve (_, arguments_, context) {
        if (context.currentUser === null) {
          throw new Error('Unauthenticated!');
        }

        return context.currentUser;
      }
    });
  }
});

export const Mutation = mutationType({
  definition (t) {
    t.field('signup', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve (_, arguments_, context: Context) {
        const password = await hash(arguments_.password, 10);
        const existUser = await context.prisma.user.findUnique({
          where: {
            email: arguments_.email
          }
        });
        if (existUser) {
          throw new ApolloError(
            'User already exists',
            '401',
            {
              name: 'email'
            });
        }
        const user = await context.prisma.user.create({
          data: {
            ...arguments_,
            password,
            provider: 'email'
          }
        });

        return {
          user
        };
      }
    });
  }
});
