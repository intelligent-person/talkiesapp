import { gql, useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import { Nav, Button, H1 } from '../styles'
import { useAuth } from '../hooks/useAuth'
import { useAuthMutation } from '../hooks/useAuthMutation'
import { LOGOUT_MUTATION } from '../types/graphql'

function Home () {
  const { loading, currentUser } = useAuth()
  const { mutation } = useAuthMutation('logout', LOGOUT_MUTATION)

  if (loading) return <p>Loading...</p>
  if (!currentUser) {
    return (<div>
      <Nav
        as={Link}
        href={'/signup'}
      >Signup</Nav>
      <Nav
        as={Link}
        href={'/login'}
      >Login</Nav>
    </div>)
  }

  return (
    <div>
      <H1>Welcome back, {currentUser?.email}</H1>

      <Button
        onClick={async () => await mutation()}
      >Logout</Button>
    </div>
  )
}

export default Home
