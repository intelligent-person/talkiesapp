import { gql } from '@apollo/client'

export const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $password: String!){
      signup(email: $email, password: $password, name: "User Name") {
          token
          user {
              id
              name
          }
      }
  }
`

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!){
      login(email: $email, password: $password) {
          token
          user {
              id
              name
              email
          }
      }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation {
      logout {
          user {
              id
          }
      }
  }
`
