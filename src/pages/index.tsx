import {gql, useMutation, useQuery} from "@apollo/client";
import Link from 'next/link'
import {Nav, Button, H1} from "../styles";

const GET_GREETING = gql`
    query {
        me {
            id
            name
        }
    }
`;
const LOGOUT = gql`
    mutation {
        logout {
            success
        }
    }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_GREETING);
  const [mutateFunction, {data: success}] = useMutation(LOGOUT, {
    update(cache) {
      cache.modify({
        fields: {
          me() {
            return null
          }
        }
      })
    }
  });
  
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (!data?.me) return (<div>
    <Nav
      as={Link}
      href={'/signup'}
    >Signup</Nav>
    <Nav
      as={Link}
      href={'/login'}
    >Login</Nav>
  </div>);
  
  const { me } = data
  
  return (
    <div>
      <H1>Welcome back, {me?.name}</H1>
      
      
      <Button
        onClick={() => mutateFunction()}
      >Logout</Button>
    </div>
  );
}

export default Home;