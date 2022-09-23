import { NextPage, NextPageContext } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { LOGIN_MUTATION } from '../types';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

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

export default LoginPage;
