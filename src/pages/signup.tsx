import {gql, useMutation} from "@apollo/client";
import {useCallback} from "react";
import {NextPage} from "next";
import {Button, H1} from "../styles";
import {useRouter} from "next/router";

const MUTATION = gql`
    mutation {
        signup(email: "iva@gmail.com", password: "123456", name: "ivan") {
            token
            user {
                id
                name
                email
            }
        }
    }
`;

const SignUpPage: NextPage = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(MUTATION);
  const router = useRouter()
  
  const onCLick = useCallback(async() => {
    await mutateFunction().then((res) => {
      console.log(res)
      router.push('/')
    })
  }, [router])
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  
  return (
    <form>
      <Button
        onClick={onCLick}
      >Signup</Button>
    </form>
  );
};

export default SignUpPage;