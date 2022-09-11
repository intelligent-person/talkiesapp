import {NextPage} from "next";
import {useAuthMutation} from "../hooks/useAuthMutation";
import {SIGNUP_MUTATION} from "../types/graphql";
import AuthComponent from "../components/AuthComponent";


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