import {gql, useQuery} from "@apollo/client";

const GET_GREETING = gql`
    query {
        me {
            id
            name
        }
    }
`;

export const useAuth = () => {
  const { loading, error, data } = useQuery(GET_GREETING);
  return { loading, error, currentUser: data?.me }
}