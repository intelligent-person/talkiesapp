import { NextPage } from 'next'
import { useAuthMutation } from '../hooks/useAuthMutation'
import AuthComponent from '../components/AuthComponent'
import { LOGIN_MUTATION } from '../types'

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
