import * as React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ThemeProvider} from 'styled-components';
import { Router } from "@reach/router"
import {GlobalStyle} from 'styles/globals';
import Home from 'components/Home'; 
import pallet from 'styles/pallet';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
});


const App: React.FC = () => (
  <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={pallet}>
    <Router>
        <Home path="/" />
    </Router>
      </ThemeProvider>
  </ApolloProvider>
);

export default App;



