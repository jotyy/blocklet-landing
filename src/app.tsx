import '@fontsource/inter/latin-800.css';
import '@fontsource/poppins/index.css';

import './app.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import Loading from './components/loading';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/toaster';
import { ThemeProvider } from './context/theme-provider';
import { ProtectedRoutes, PublicRoutes } from './router';
import { AuthLoader } from './services/user';

function ErrorFallback() {
  return (
    <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-6" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
}

const queryClient = new QueryClient();

export default function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <BrowserRouter>
            <AuthLoader renderLoading={() => <Loading />} renderUnauthenticated={() => <PublicRoutes />}>
              <ProtectedRoutes />
            </AuthLoader>
          </BrowserRouter>
          <Toaster />
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
