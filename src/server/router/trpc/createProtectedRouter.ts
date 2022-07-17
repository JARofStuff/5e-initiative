import * as trpc from '@trpc/server';
import { createRouter } from './context';

export function createProtectedRouter() {
  return createRouter().middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new trpc.TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next({
      ctx: {
        ...ctx,
        // infers that 'session' and 'userId' are non-nullable to downstream resolvers
        session: {
          ...ctx.session,
          user: { ...ctx.session.user, id: ctx.session.user.id as string },
        },
      },
    });
  });
}