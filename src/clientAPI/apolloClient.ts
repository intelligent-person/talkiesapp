import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : 'https://talkiesapp.vercel.app/api/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
});
