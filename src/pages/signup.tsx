import { NextPage, NextPageContext } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { SIGNUP_MUTATION } from '../types';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

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
  const { req, res } = context;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: { destination: '/' }
    };
  }

  return {
    props: {}
  };
}

export default SignUpPage;
