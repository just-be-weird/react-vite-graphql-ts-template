import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { errorMiddleware } from './errorMiddelware';
import { __APP_BASE_GRAPH_URL__, __APP_BASE_REST_URL__ } from '@/constants';

const inMemoryCache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
    Query: {
      fields: {
        /** Section: Custom User defined fields **/
        // appSession: {
        // }
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: __APP_BASE_GRAPH_URL__ || __APP_BASE_REST_URL__, // Server URL (must be absolute)
  credentials: 'omit',
});

export function createApolloClient() {
  return new ApolloClient({
    /**
     *  By specifying the name and version, the Apollo Client automatically adds
     *  them to each operation request as HTTP headers -
     *  1. apollographql-client-name   2. apollographql-client-version
     *  This will help in the operation tracing, reports and analytics
     */
    name: 'Platform',
    version: '1.0.0',
    link: from([errorMiddleware, httpLink]),
    cache: inMemoryCache,
  });
}
