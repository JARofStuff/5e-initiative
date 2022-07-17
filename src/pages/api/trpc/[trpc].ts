// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/router/trpc';
import { createContext } from '../../../server/router/trpc/context';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
