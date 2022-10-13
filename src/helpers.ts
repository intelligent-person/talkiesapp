export const errorName = (formErrors: any): string => {
  return formErrors?.graphQLErrors?.[0]?.extensions?.name;
};
