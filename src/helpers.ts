import { ApolloError } from '@apollo/client';

export const errorName = (status: number): string => {
  switch (status) {
  case 401:
    return 'email';
  case 403:
    return 'password';
  default:
    return '';
  }
};

export const getGraphQLError = (error: ApolloError) => {
  return {
    code: Number(error?.graphQLErrors?.[0]?.extensions?.code as string),
    message: error?.graphQLErrors?.[0]?.message
  };
};
