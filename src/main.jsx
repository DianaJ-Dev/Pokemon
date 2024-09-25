import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './configApollo.js'
import { FavoriteProvider } from './context/FavoriteProvider.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <FavoriteProvider>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </FavoriteProvider>
  </StrictMode>
);
  
