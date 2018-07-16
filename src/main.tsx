import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import App from './components/app/app';
import './main.scss';

render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('app'),
);
