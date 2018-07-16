import { ApolloClient } from 'apollo-client';
import { ApolloReducerConfig, InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import schema from './schema';

declare var window: { __APOLLO_STATE__: ApolloReducerConfig };

const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(window.__APOLLO_STATE__),
  link: new SchemaLink({ schema }),
});

export default graphqlClient;
