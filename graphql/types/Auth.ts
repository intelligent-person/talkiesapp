import { mutationType, nonNull, objectType, queryType, stringArg } from 'nexus';
import { Context } from '../context/context';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
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
            isUserExists: {
              email: arguments_.email,
              provider: 'email'
            }
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
        const token = sign({ userId: user?.id }, process.env.APP_SECRET);
        context.setCookies('token', token);

        return {
          token,
          user
        };
      }
    });
    t.field('login', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve (_, arguments_, context: Context) {
        const user = await context.prisma.user.findUnique({
          where: {
            isUserExists: {
              email: arguments_.email,
              provider: 'email'
            }
          }
        });

        if (!user) {
          throw new ApolloError(
            'No such user found',
            '401',
            {
              name: 'email'
            });
        }

        const valid = await compare(arguments_.password, user.password);
        if (!valid) {
          throw new ApolloError(
            'Invalid password',
            '401',
            {
              name: 'password'
            });
        }

        const token = sign({ userId: user.id }, process.env.APP_SECRET/* { expiresIn: 86400 * 30 } */);
        context.setCookies('token', token);

        return {
          token,
          user
        };
      }
    });
    t.field('logout', {
      type: 'AuthPayload',
      args: {},
      async resolve (_, arguments_, context: Context) {
        context.setCookies('token', '', {
          maxAge: -1,
          path: '/'
        });
        context.currentUser = null;
        return {
          user: null
        };
      }
    });
  }
});
