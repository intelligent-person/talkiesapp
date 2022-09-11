import { NextPage } from 'next'
import { useAuthMutation } from '../hooks/useAuthMutation'
import { LOGIN_MUTATION } from '../types/graphql'
import AuthComponent from '../components/AuthComponent'

const LoginPage: NextPage = () => {
  const { error, mutation } = useAuthMutation('login', LOGIN_MUTATION)

  return (
    <AuthComponent
      type={'login'}
      mutationError={error}
      mutation={mutation}
    />
  )
}

export default LoginPage
