import { gql, useQuery } from '@apollo/client';

export const GET_GREETING = gql`
  query {
      me {
          id
          name
          email
          provider
          image
          createdAt
      }
  }
`;

export const useAuth = () => {
  const { loading, error, data } = useQuery(GET_GREETING);
  return { loading, error, currentUser: data?.me };
};
