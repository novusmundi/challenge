import {
    ApolloClient,
    ApolloLink,
    from,
    HttpLink,
    InMemoryCache,
  } from '@apollo/client';
  import { onError } from '@apollo/client/link/error';
  import fetch from 'cross-fetch';
  const lensAPI = "https://api.lens.dev"

  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };
  
  const httpLink = new HttpLink({
    uri: lensAPI,
    fetch,
  });
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)  {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      }
  
      );
    }
  
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  
  
  export const apolloClient = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });