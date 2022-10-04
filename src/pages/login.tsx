import { NextPage, NextPageContext } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { gql } from '@apollo/client';
import { getAuthorizedUser } from '../auth';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!){
      login(email: $email, password: $password) {
          token
          user {
              id
              name
              email
          }
      }
  }
`;

const LoginPage: NextPage = () => {
  const { error, mutation } = useAuthMutation('login', LOGIN_MUTATION);
  return (
    <AuthComponent
      type={'login'}
      mutationError={error}
      mutation={mutation}
    />
  );
};

export async function getServerSideProps (context: NextPageContext) {
  const { req } = context;
  const currentUser = await getAuthorizedUser(req);

  if (currentUser) {
    return {
      redirect: { destination: '/' }
    };
  }

  return {
    props: {}
  };
}

export default LoginPage;
