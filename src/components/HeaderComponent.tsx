import { GridColumn, GridRow } from 'emotion-flex-grid';
import { FC, useCallback } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { gridGap, Header, Input, Label, ml, Nav, SearchForm } from '../styles';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MdAutoAwesomeMotion, MdHomeFilled, MdLogin, MdLogout } from 'react-icons/md';

const HeaderComponent: FC = () => {
  const { data } = useSession();

  const {
    handleSubmit,
    register
  } = useForm();

  const onSearch = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <Header>
      <GridRow
        justify={['end', 'between']}
        align={'center'}
      >
        <GridColumn
          width={4}
          display={['none', 'block']}
          css={ml([0, 30, 150])}
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
            css={gridGap([8, 10, 30])}
          >
            <GridColumn
              width={'auto'}
            >
              <Link
                href={'/'}
              >
                <Nav
                  withIcon
                  tab
                >
                  <span className="material-symbols-outlined">
                    home
                  </span>
                  <MdHomeFilled className={'hover'}/>
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
                  tab
                >
                  <span className="material-symbols-outlined">
                    auto_awesome_motion
                  </span>
                  <MdAutoAwesomeMotion className={'hover'}/>
                  Discovery
                </Nav>
              </Link>
            </GridColumn>

            {data?.user
              ? <GridColumn
                width={'auto'}
              >
                <Nav
                  tab
                  withIcon
                  onClick={async () => await signOut()}
                >
                  <span className="material-symbols-outlined">
                    logout
                  </span>
                  <MdLogout className={'hover'}/>
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
                    tab
                    withIcon
                  >
                    <span className="material-symbols-outlined">
                      login
                    </span>
                    <MdLogin className={'hover'}/>
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
