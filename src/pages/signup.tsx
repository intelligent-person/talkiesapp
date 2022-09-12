import { NextPage } from 'next';
import { useAuthMutation } from '../hooks/useAuthMutation';
import AuthComponent from '../components/AuthComponent';
import { SIGNUP_MUTATION } from '../types';

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

export default SignUpPage;
