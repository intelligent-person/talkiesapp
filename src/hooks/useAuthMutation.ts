import { DocumentNode, OperationVariables, TypedDocumentNode, useMutation } from '@apollo/client';

type MutationKey = 'login' | 'logout' | 'signin'

export const useAuthMutation = (key: MutationKey, MUTATION: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
  const [mutateFunction, { data, loading, error }] = useMutation(MUTATION, {
    update (cache, { data }) {
      cache.modify({
        fields: {
          me () {
            return data[key].user;
          }
        }
      });
    }
  });

  return {
    loading,
    error,
    currentUser: data?.me,
    mutation: mutateFunction
  };
};
