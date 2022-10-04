import { NextPage, NextPageContext } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { gql } from '@apollo/client';
import { getAuthorizedUser } from '../auth';

export const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $password: String!){
      signup(email: $email, password: $password) {
          token
          user {
              id
              name
          }
      }
  }
`;

const SignUpPage: NextPage = () => {
  const { mutation, error } = useAuthMutation('signin', SIGNUP_MUTATION);

  return (
    <AuthComponent
      type={'signup'}
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

export default SignUpPage;
