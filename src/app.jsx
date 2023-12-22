import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Router from './routes';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      console.log('重试');
    }}
  >
    <Suspense fallback={<div>loading....</div>}>
      <Router />
    </Suspense>
  </ErrorBoundary>
);

export default App;
