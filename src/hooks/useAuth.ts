import { useQuery } from '@apollo/client';
import { GET_GREETING } from '../types';

export const useAuth = () => {
  const { loading, error, data } = useQuery(GET_GREETING);
  return { loading, error, currentUser: data?.me };
};
