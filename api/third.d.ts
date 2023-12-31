declare module 'vite-plugin-blocklet';

declare module 'express-history-api-fallback';

declare module 'express-async-errors';

namespace Express {
  interface Request {
    user?: {
      id: string;
      email: string;
      name: string;
      avatar?: string;
      bio?: string;
    };
  }
}
