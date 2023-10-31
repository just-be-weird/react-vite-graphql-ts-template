import { onError } from '@apollo/client/link/error';
import { __DEV__ } from '@/constants';

/**
 * IMPORTANT: If we don't want to retry an operation, onError link's function
 * should not return anything.
 */
export const errorMiddleware = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    console.log(
      'GraphQL error',
      { graphQLErrors, networkError, operation, response },
      'error',
    );

    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.log(
        ...[
          graphQLErrors,
          networkError,
          operation?.operationName,
          operation?.variables,
          response,
        ].filter(Boolean),
      );
    }

    if (graphQLErrors)
      /**
       * If we want to implement renew auth token on token expiry, that can be
       * implemented here
       */
      graphQLErrors.forEach(({ message, path }) =>
        console.log(
          'GraphQL error',
          `Message: ${message},  Path: ${path?.join('.')}`,
          'error',
        ),
      );

    /**
     * To retry on network errors, we should use the RetryLink instead of the
     * onError link. This just logs the error on clients console.
     */
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log('Network error', `${networkError}`, 'error');
    }

    // This block will conditionally ignore errors for operation specified and
    // force apollo to return partial data. So use it with care!
    // Note: operationName is the name of the query / mutation which was executed
    // if (ignoreOperationMap[operation.operationName]) {
    //   response.errors = null;
    // }
  },
);
