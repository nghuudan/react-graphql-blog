import React from 'react';
import { Query } from 'react-apollo';
import AppHeader from './app-header';
import UserQuery from '../../graphql/queries/user-query.graphql';

const AppHeaderContainer = () => (
  <Query query={UserQuery}>
    {
      ({ data }) => <AppHeader user={data && data.user} />
    }
  </Query>
);

export default AppHeaderContainer;
