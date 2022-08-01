import { checkUnauthorized } from '@libs/localStorage';
import logger from '@libs/logger';
import { QueryClient } from '@tanstack/react-query';

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const accessToken = checkUnauthorized();
  const id = 'react-query-error';
  const title =
    error instanceof Error
      ? // remove the initial 'Error: ' that accompanies many errors
        error.toString().replace(/^Error:\s*/, '')
      : 'error connecting to server';

  // handle refresh token as needed
  // if (error?.statusCode === 401 && accessToken) {
  //   void refreshTokenFn();
  // }
  logger.debug('🚀 ~ Query onError:', { id, title, accessToken });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // 15 minutes
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },

  // queryCache: new QueryCache({
  //     onError: () => {
  //         // if (query.state.data !== undefined) {
  //         notify(NOTIFICATION_TYPE.ERROR, `Something went wrong`, { position: 'top-right' });
  //         // }
  //     },
  // }),
});
export default queryClient;
