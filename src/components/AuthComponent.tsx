import {GridColumn, GridRow} from "emotion-flex-grid";
import {css} from "@emotion/react";
import {
  alignItems,
  Button,
  flex, fontWeight,
  FormGroup,
  gridGap,
  H1,
  H4,
  H6,
  Input,
  justifyContent,
  Label,
  mb, Nav,
  uppercase,
  width,
  m
} from "../styles";
import Google from 'public/img/icons/google.svg'
import Github from 'public/img/icons/github.svg'
import ArrowRight from 'public/img/icons/arrow_right.svg'
import Image from "next/image";
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import {useCallback, useEffect} from "react";
import {errorName} from "../helpers";
import {useAuth} from "../hooks/useAuth";
import {useRouter} from "next/router";
import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {authSchema} from "../validation";

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
}

const AuthComponent = (props) => {
  const {type = 'login', mutationError, mutation} = props
  
  const {loading, currentUser} = useAuth();
  const router = useRouter()
  
  const defaultText = captions[type]
  
  const {
    handleSubmit,
    register,
    setError,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(authSchema),
    mode: 'onChange'
  })
  
  const onSubmit = useCallback(({email, password}) => {
    mutation({
      variables: {
        email,
        password
      }
    }).then(() => router.push('/'))
  }, [router])
  
  useEffect(() => {
    if (!loading && currentUser) {
      router.push('/')
    }
  }, [currentUser, loading])
  
  useEffect(() => {
    if (mutationError) {
      setError(errorName(mutationError), {message: mutationError?.message})
    }
  }, [mutationError])
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GridRow
        direction={'column'}
        align={'center'}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: url("/img/bgc.png") center no-repeat;
          background-size: cover;
          padding: 35px 0 50px;
        `}
      >
        <GridColumn
          width={'auto'}
          css={{
            height: '60px',
            marginBottom: 55
          }}
        />
        <GridColumn
          width={'auto'}
          css={{marginBottom: 30}}
        >
          <H1>Movies, series, cartoons - in one place.</H1>
        </GridColumn>
        <GridColumn
          width={'auto'}
          textAlign={'center'}
          css={css`
            width: 637px;
            padding: 37px;
            background: rgba(134, 134, 134, 0.4);
            backdrop-filter: blur(41.5887px);
            border-radius: 20px;
          `}
        >
          <H4
            css={css`
              font-weight: 600;
              margin-bottom: 20px;
            `}
          >{defaultText.title}</H4>
          <GridRow
            justify={'between'}
            css={[
              gridGap(19),
              mb(25)
            ]}
          >
            <Button
              secondary
              css={[
                flex,
                justifyContent('between'),
                width('50%'),
                alignItems('center'),
              ]}
            >
              <Image src={Google} height={33} width={33}/>
              Sign in with Google
            </Button>
            <Button
              secondary
              css={[
                flex,
                justifyContent('between'),
                width('50%'),
                alignItems('center'),
              ]}
            >
              <Image src={Github} height={33} width={33}/>
              Sign in with GitHub
            </Button>
          </GridRow>
          <div
            css={css`
              border-width: 0.5px;
              border-style: solid;
              border-image: linear-gradient(to right, rgba(231, 231, 231, 0), rgba(231, 231, 231, 1), rgba(231, 231, 231, 0)) 100% 0;
              content: '';
              margin-bottom: 25px;
            `}
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
              name={`email`}
              render={({message}) => (
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
                maxLength: {value: 20, message: 'lox'},
              })}
            />
            <Label
              className={'valid'}
              htmlFor={'password'}
            >Enter your password</Label>
            <ErrorMessage
              errors={errors}
              name={`password`}
              render={({message}) => (
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
              gridGap(20),
              mb(20)
            ]}
          >
            <H6
              css={fontWeight(200)}
            >{defaultText.caption}</H6>
            <Link
              href={defaultText.href}
            >
              <Nav>{defaultText.link}</Nav>
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
              withImage
            >
              Continue without log in
              <Image src={ArrowRight}/>
            </Nav>
          </Link>
        </GridColumn>
      </GridRow>
    </form>
  );
};

export default AuthComponent;