import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from './graphql/init';
import './theme/index.css';
import '@mantine/core/styles.css';
import { cssVarResolver, theme } from '@/theme';
import { MantineProvider } from '@mantine/core';

const Core = () => {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider theme={theme} cssVariablesResolver={cssVarResolver}>
        <App />
      </MantineProvider>
    </ApolloProvider>
  );
};

const container: null = null;
document.addEventListener('DOMContentLoaded', function paintUI() {
  if (!container) {
    const root = ReactDOM.createRoot(document.getElementById('root')!);

    root.render(
      <StrictMode>
        <Core />
      </StrictMode>,
    );
  }
});
