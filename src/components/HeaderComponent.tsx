import { GridColumn, GridRow } from 'emotion-flex-grid';
import { useAuthMutation } from '../hooks/useAuthMutation';
import { FC, useCallback } from 'react';
import { signOut } from 'next-auth/react';
import { gql } from '@apollo/client';
import { gridGap, Header, Input, Label, ml, Nav, SearchForm } from '../styles';
import Link from 'next/link';
import { HeaderComponentProperties } from '../types';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const LOGOUT_MUTATION = gql`
  mutation {
      logout {
          user {
              id
          }
      }
  }
`;

const HeaderComponent: FC<HeaderComponentProperties> = ({ currentUser }) => {
  const { mutation } = useAuthMutation('logout', LOGOUT_MUTATION);
  const router = useRouter();

  const {
    handleSubmit,
    register
  } = useForm();

  const signOutClick = useCallback(async () => {
    if (currentUser) {
      await (currentUser.provider === 'email'
        ? mutation().then(() => router.reload())
        : signOut()
      );
    }
  }, [currentUser, mutation, router]);

  const onSearch = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <Header>
      <GridRow
        justify={'between'}
        align={'center'}
      >
        <GridColumn
          width={4}
          css={ml(150)}
        >
          <form
            onSubmit={handleSubmit(onSearch)}
          >
            <SearchForm>
              <Input
                id={'search'}
                type={'search'}
                placeholder={'Search'}
                {...register('search')}
              />
              <Label
                className={'valid'}
                htmlFor={'search'}
              >
                <span
                  className="material-symbols-outlined"
                >search</span>
                <div>Search</div>
              </Label>
            </SearchForm>
          </form>
        </GridColumn>

        <GridColumn
          width={'auto'}
        >
          <GridRow
            css={gridGap(60)}
          >
            <GridColumn
              width={'auto'}
            >
              <Link
                href={'/'}
              >
                <Nav
                  withIcon
                >
                  <span className="material-symbols-outlined">
                    home
                  </span>
                  Home
                </Nav>
              </Link>
            </GridColumn>
            <GridColumn
              width={'auto'}
            >
              <Link
                href={'/search'}
              >
                <Nav
                  withIcon
                >
                  <span className="material-symbols-outlined">
                    auto_awesome_motion
                  </span>
                  Discovery
                </Nav>
              </Link>
            </GridColumn>

            {currentUser
              ? <GridColumn
                width={'auto'}
              >
                <Nav
                  withIcon
                  onClick={signOutClick}
                >
                  <span className="material-symbols-outlined">
                    logout
                  </span>
                  Logout
                </Nav>
              </GridColumn>
              : <GridColumn
                width={'auto'}
              >
                <Link
                  href={'/login'}
                >
                  <Nav
                    withIcon
                  >
                    <span className="material-symbols-outlined">
                      login
                    </span>
                    Sign In
                  </Nav>
                </Link>
              </GridColumn>
            }
          </GridRow>
        </GridColumn>
      </GridRow>
    </Header>
  );
};

export default HeaderComponent;
