import {nonNull, objectType, stringArg} from "nexus";
import {Context} from "../context/context";
import {compare, hash} from "bcryptjs";
import {sign, } from "jsonwebtoken";

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token')
    t.nonNull.field('user', {
      type: "User",
    })
  },
})
export const LogoutPayload = objectType({
  name: 'LogoutPayload',
  definition(t) {
    t.nonNull.boolean('success')
  },
})

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.field('me', {
      type: "User",
      args: {},
      async resolve(_, args, ctx) {
        if (ctx.currentUser === null) {
          throw new Error("Unauthenticated!");
        }
        
        return ctx.currentUser;
      }
    })
  },
})

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_, args, ctx: Context) {
        const password = await hash(args.password, 10);
        const existUser = await ctx.prisma.user.findUnique({
          where: { email: args.email },
        });
        if(existUser) {
          throw new Error('User already exists')
        }
        const user = await ctx.prisma.user.create({
          data: { ...args, password },
        });
        const token = sign({ userId: user.id }, process.env.APP_SECRET);
        ctx.setCookies('token', token)
  
        return {
          token,
          user,
        };
      }
    })
    t.field('login', {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      async resolve(_, args, ctx: Context) {
        const user = await ctx.prisma.user.findUnique({
          where: { email: args.email },
        });
        
        if (!user) {
          throw new Error("No such user found");
        }
        
        const valid = await compare(args.password, user.password);
        if (!valid) {
          throw new Error("Invalid password");
        }
        
        const token = sign({ userId: user.id }, process.env.APP_SECRET,/*{ expiresIn: 86400 * 30 }*/);
        ctx.setCookies('token', token)
        
        return {
          token,
          user,
        };
      }
    })
    t.field('logout', {
      type: 'LogoutPayload',
      args: {},
      async resolve(_, args, ctx: Context) {
        ctx.setCookies('token', '', {
          maxAge: -1,
          path: '/',
        })
        ctx.currentUser = null
        if(!ctx.currentUser) {
          return {
            success: true
          }
        }
        else return {
          success: false
        }
      }
    })
  },
})