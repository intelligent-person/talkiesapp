import { NextPage, NextPageContext } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { LOGIN_MUTATION } from '../types';
import { getSession } from 'next-auth/react';

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
  const session = await getSession({ req });
  console.log(session);

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
