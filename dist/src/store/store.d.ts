/// <reference types="node" />
/// <reference types="react" />
import { Context } from 'next-redux-wrapper';
import { TypedUseSelectorHook } from 'react-redux';
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    genres: import("../types").MovieGenre[];
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    genres: import("../types").MovieGenre[];
}, import("redux").AnyAction, undefined>]>;
declare const makeStore: (context: Context) => import("@reduxjs/toolkit").EnhancedStore<{
    genres: import("../types").MovieGenre[];
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    genres: import("../types").MovieGenre[];
}, import("redux").AnyAction, undefined>]>;
export declare type AppStore = ReturnType<typeof makeStore>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare const useSelector: TypedUseSelectorHook<RootState>;
export declare const wrapper: {
    getServerSideProps: <P extends {} = any>(callback: import("next-redux-wrapper").GetServerSidePropsCallback<import("@reduxjs/toolkit").EnhancedStore<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, undefined>]>, P>) => import("next").GetServerSideProps<P, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
    getStaticProps: <P_1 extends {} = any>(callback: import("next-redux-wrapper").GetStaticPropsCallback<import("@reduxjs/toolkit").EnhancedStore<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, undefined>]>, P_1>) => import("next").GetStaticProps<P_1, import("querystring").ParsedUrlQuery, import("next").PreviewData>;
    getInitialAppProps: <P_2 extends {} = any>(callback: import("next-redux-wrapper").AppCallback<import("@reduxjs/toolkit").EnhancedStore<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, undefined>]>, P_2>) => ({ Component, ctx }: import("next/app").AppContext) => Promise<import("next/app").AppInitialProps<any> & {
        pageProps: P_2;
    }>;
    getInitialPageProps: <P_3 extends {} = any>(callback: import("next-redux-wrapper").PageCallback<import("@reduxjs/toolkit").EnhancedStore<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        genres: import("../types").MovieGenre[];
    }, import("redux").AnyAction, undefined>]>, P_3>) => ((context: import("next").NextPageContext<any>) => any) | undefined;
    withRedux: (Component: any) => {
        (props: any): JSX.Element;
        displayName: string;
        getInitialProps: any;
    };
    useWrappedStore: ({ initialState, initialProps, ...props }: any, displayName?: string | undefined) => {
        store: import("@reduxjs/toolkit").EnhancedStore<{
            genres: import("../types").MovieGenre[];
        }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
            genres: import("../types").MovieGenre[];
        }, import("redux").AnyAction, undefined>]>;
        props: any;
    };
};
export {};
