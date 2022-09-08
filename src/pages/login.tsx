import {css} from "@emotion/react";
import {gql, useMutation} from "@apollo/client";
import {useCallback, useEffect} from "react";
import {NextPage} from "next";
import Link from "next/link";
import {Nav, H1, Button} from "../styles";
import {useRouter} from "next/router";

const MUTATION = gql`
    mutation {
        login(email: "ivan123123@gmail.com", password: "123456") {
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
  const [mutateFunction, { data, loading, error }] = useMutation(MUTATION, {
    update(cache, { data}) {
      cache.modify({
        fields: {
          me() {
            return data.user
          }
        }
      })
    }
  });
  const router = useRouter()
  
  const onCLick = useCallback(async() => {
    await mutateFunction().then((res) => {
      console.log(res)
      router.push('/')
    })
  }, [router])
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data)
  return (
    <div>
      <H1>Movies, series, cartoons - in one place.</H1>
      <Button
        onClick={onCLick}
      >Login</Button>
    </div>
  );
};

export default LoginPage;