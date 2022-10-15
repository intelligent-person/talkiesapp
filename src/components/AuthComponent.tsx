import { GridColumn, GridRow } from 'emotion-flex-grid';
import { css } from '@emotion/react';
import { Button, display, FormGroup, gridGap, H1, H4, H6, Input, Label, mb, Nav, uppercase, width, p, flexDirection } from '../styles';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FC, useCallback } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../validation';
import { AuthComponentProperties } from '../types';
import { signIn } from 'next-auth/react';
import { BsChevronRight } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const captions = {
  login: {
    title: 'Log in',
    caption: 'Don’t have an account yet?',
    link: 'Sign Up',
    href: 'signup'
  },
  signup: {
    title: 'Create an account',
    caption: 'Already have an account?',
    link: 'Log In',
    href: 'login'

  }
};

const AuthComponent: FC<AuthComponentProperties> = (props) => {
  const { type = 'login', mutation } = props;

  const defaultText = captions[type];

  const {
    handleSubmit,
    register,
    setError,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(authSchema),
    mode: 'onSubmit'
  });

  const onSubmit = useCallback(async ({ email, password }) => {
    await mutation({
      email,
      password,
      setError
    });
  }, [setError, mutation]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridRow
        direction={'column'}
        align={'center'}
        css={css`
          position: fixed;
          overflow-y: auto;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #161517;
          padding: 35px 20px 40px;
        `}
      >
        <GridColumn
          width={'auto'}
          css={[
            mb([0, 100, 120])
          ]}
        />
        <GridColumn
          width={'auto'}
          css={mb([14, 40])}
        >
          <H1>Movies, series, cartoons -{' '}
            <br css={display(['block', 'none'])}/>
            in one place.</H1>
        </GridColumn>
        <GridColumn
          width={'auto'}
          textAlign={'center'}
          css={[
            width(['100%', '637px']),
            p(['28px 14px', '15px 37px']),
            css`
            background: rgba(134, 134, 134, 0.4);
            backdrop-filter: blur(41.5887px);
            border-radius: 20px;
          `]}
        >
          <H4
            css={[
              mb([14, 20]),
              uppercase
            ]}
          >{defaultText.title}</H4>
          <GridRow
            justify={'between'}
            css={[
              gridGap(19),
              mb([14])
            ]}
          >
            <Button
              secondary
              withIcon
              type={'button'}
              onClick={async () => await signIn('google')}
              css={[
                width('50%'),
                flexDirection(['row-reverse', 'row'])
              ]}
            >
              <FcGoogle/>
              <div>
                Sign in with{' '}
                <div
                  css={display(['none', 'inline-block'])}
                >Google</div>
              </div>
            </Button>
            <Button
              secondary
              withIcon
              type={'button'}
              onClick={async () => await signIn('github')}
              css={[
                width('50%'),
                flexDirection(['row-reverse', 'row'])
              ]}
            >
              <FaGithub/>
              <div>
                Sign in with{' '}
                <div
                  css={display(['none', 'inline-block'])}
                >GitHub</div>
              </div>
            </Button>
          </GridRow>
          <div
            css={[
              mb([14, 20]),
              css`
              border-width: 0.5px;
              border-style: solid;
              border-image: linear-gradient(to right, rgba(231, 231, 231, 0), rgba(231, 231, 231, 1), rgba(231, 231, 231, 0)) 100% 0;
              content: '';
            `]}
          />
          <FormGroup
            invalid={!!errors?.email}
          >
            <Input
              id={'email'}
              type={'email'}
              placeholder={'Enter your email'}
              {...register('email')}
            />
            <Label
              className={'valid'}
              htmlFor={'email'}
            >Enter your email</Label>
            <ErrorMessage
              errors={errors}
              name={'email'}
              render={({ message }) => (
                <Label
                  className={'invalid'}
                >{message}</Label>
              )}
            />
          </FormGroup>
          <FormGroup
            invalid={!!errors?.password}
            css={mb(20)}
          >
            <Input
              id={'password'}
              type={'password'}
              placeholder={'Enter your password'}
              {...register('password', {
                maxLength: { value: 20, message: 'lox' }
              })}
            />
            <Label
              className={'valid'}
              htmlFor={'password'}
            >Enter your password</Label>
            <ErrorMessage
              errors={errors}
              name={'password'}
              render={({ message }) => (
                <Label
                  className={'invalid'}
                >{message}</Label>
              )}
            />
          </FormGroup>
          <GridRow
            justify={'center'}
            align={'center'}
            css={[
              gridGap([10, 20]),
              mb(20)
            ]}
          >
            <H6>{defaultText.caption}</H6>
            <Link
              href={defaultText.href}
            >
              <Nav
                type={'button'}
              >{defaultText.link}</Nav>
            </Link>
          </GridRow>
          <GridColumn>
            <Button
              primary
              type={'submit'}
              css={[uppercase, mb(20)]}
            >Start watching</Button>
          </GridColumn>
          <Link
            href={'/'}
          >
            <Nav
              type={'button'}
              withIcon
            >
              Continue without log in
              <BsChevronRight />
            </Nav>
          </Link>
        </GridColumn>
      </GridRow>
    </form>
  );
};

export default AuthComponent;
