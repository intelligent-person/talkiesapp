import { NextPage, NextPageContext } from 'next';
import AuthComponent from '../components/AuthComponent';
import { ApolloError, gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { errorName, getGraphQLError } from '../helpers';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [mutation] = useMutation(SIGNUP_MUTATION);

  const mutationSubmit = useCallback(async ({ email, password, setError }) => {
    try {
      await mutation({
        variables: {
          email,
          password
        }
      });

      await signIn('credentials', {
        email,
        password
      });

      await router.push('/');
    } catch (error) {
      const { code, message } = getGraphQLError(error as ApolloError);
      setError(errorName(code), { message });
    }
  }, [mutation, router]);

  return (
    <AuthComponent
      type={'signup'}
      mutation={mutationSubmit}
    />
  );
};

export async function getServerSideProps (context: NextPageContext) {
  const { req } = context;
  const currentUser = await getSession({ req });

  if (currentUser) {
    return {
      redirect: {
        destination: '/'
      }
    };
  }

  return {
    props: {}
  };
}

export default SignUpPage;
