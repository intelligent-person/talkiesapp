import Link from 'next/link';
import { Nav, Button, H1 } from '../styles';
import { useAuth } from '../hooks/useAuth';
import { useAuthMutation } from '../hooks/useAuthMutation';
import { LOGOUT_MUTATION } from '../types';
import { useCallback } from 'react';
import { signOut } from 'next-auth/react';

function Home () {
  const { loading, currentUser } = useAuth();
  const { mutation } = useAuthMutation('logout', LOGOUT_MUTATION);
  const signOutClick = useCallback(async () => {
    await (currentUser?.provider === 'email' ? mutation() : signOut());
  }, [currentUser?.provider, mutation]);

  if (loading) return <p>Loading...</p>;

  if (!currentUser) {
    return (<div>
      <Link
        href={'/signup'}
      >
        <Nav
        >Signup</Nav>
      </Link>
      <Link
        href={'/login'}
      >
        <Nav
        >Login</Nav>
      </Link>
    </div>);
  }

  return (
    <div>
      <H1>Welcome back, {currentUser?.email}</H1>
      <Button
        onClick={signOutClick}
      >Logout</Button>
    </div>
  );
}

export default Home;
