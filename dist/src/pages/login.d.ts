import { NextPage, NextPageContext } from 'next';
export declare const LOGIN_MUTATION: import("@apollo/client").DocumentNode;
declare const LoginPage: NextPage;
export declare function getServerSideProps(context: NextPageContext): Promise<{
    redirect: {
        destination: string;
    };
    props?: undefined;
} | {
    props: {};
    redirect?: undefined;
}>;
export default LoginPage;
