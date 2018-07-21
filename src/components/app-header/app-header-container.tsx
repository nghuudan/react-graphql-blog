import React, { StatelessComponent } from 'react';
import { Query } from 'react-apollo';
import AppHeader from './app-header';
import UserQuery from '../../graphql/queries/user-query.graphql';

export interface AppHeaderContainerProps {
  toggleDrawer?(): void;
}

const AppHeaderContainer: StatelessComponent<AppHeaderContainerProps> = ({
  toggleDrawer,
}) => (
  <Query query={UserQuery}>
    {
      ({ data }) => <AppHeader toggleDrawer={toggleDrawer} user={data && data.user} />
    }
  </Query>
);

export default AppHeaderContainer;
