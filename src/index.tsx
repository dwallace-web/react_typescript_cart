import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//enable react query -- Hooks for managing, caching and syncing asynchronous and remote data
const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);