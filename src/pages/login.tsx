import { NextPage, NextPageContext } from 'next';
import AuthComponent from '../components/AuthComponent';
import { useCallback } from 'react';
import { getSession, signIn, SignInResponse } from 'next-auth/react';
import { errorName } from '../helpers';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const mutationSubmit = useCallback(async ({ email, password, setError }) => {
    const { error, status, ok } = await signIn('credentials',
      {
        redirect: false,
        email,
        password
      }
    ) as SignInResponse;

    if (ok) {
      await router.push('/');
    }

    if (error) {
      const statusCCode = error === 'No such user found' ? status : 403;
      setError(errorName(statusCCode), { message: error });
    }
  }, [router]);

  return (
    <AuthComponent
      type={'login'}
      mutation={mutationSubmit}
    />
  );
};

export async function getServerSideProps (context: NextPageContext) {
  const { req } = context;
  const currentUser = await getSession({ req });

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
