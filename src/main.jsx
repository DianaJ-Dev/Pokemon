import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './configApollo.js'
import { Provider } from 'react-redux'
import { store} from './Store/store.js'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}> 
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>
);
  
