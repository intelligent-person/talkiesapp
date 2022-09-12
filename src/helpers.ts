export const errorName = (formErrors): string => {
  return formErrors?.graphQLErrors?.[0]?.extensions?.name;
};
