import { GraphQLDateTime, GraphQLDate, GraphQLTime } from 'graphql-iso-date';
import { asNexusMethod } from 'nexus';
// @ts-expect-error
export const GQLDate = asNexusMethod(GraphQLDate, 'date');
// @ts-expect-error
export const GQLDateTime = asNexusMethod(GraphQLDateTime, 'dateTime');
// @ts-expect-error
export const GQLTime = asNexusMethod(GraphQLTime, 'time');
