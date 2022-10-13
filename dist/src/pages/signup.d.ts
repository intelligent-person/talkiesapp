import { NextPage, NextPageContext } from 'next';
export declare const SIGNUP_MUTATION: import("@apollo/client").DocumentNode;
declare const SignUpPage: NextPage;
export declare function getServerSideProps(context: NextPageContext): Promise<{
    redirect: {
        destination: string;
    };
    props?: undefined;
} | {
    props: {};
    redirect?: undefined;
}>;
export default SignUpPage;
