import { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client';
declare type MutationKey = 'login' | 'logout' | 'signin';
export declare const useAuthMutation: (key: MutationKey, MUTATION: DocumentNode | TypedDocumentNode<any, OperationVariables>) => {
    loading: boolean;
    error: import("@apollo/client").ApolloError | undefined;
    currentUser: any;
    mutation: (options?: import("@apollo/client").MutationFunctionOptions<any, OperationVariables, import("@apollo/client").DefaultContext, import("@apollo/client").ApolloCache<any>> | undefined) => Promise<import("@apollo/client").FetchResult<any, Record<string, any>, Record<string, any>>>;
};
export {};
