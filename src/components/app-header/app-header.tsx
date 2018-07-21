import React, { StatelessComponent } from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import { IconButton } from 'rmwc/IconButton';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from 'rmwc/TopAppBar';

export interface AppHeaderProps {
  toggleDrawer?(): void;
  user?: {
    firstName: string;
  };
}

const AppHeader: StatelessComponent<AppHeaderProps> = ({ toggleDrawer, user }) => (
  <TopAppBar className="app-header">
    <TopAppBarRow>
      <TopAppBarSection alignStart>
        <IconButton use="menu" onClick={toggleDrawer} />
        <TopAppBarTitle>TinyBlog</TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection alignEnd>
        <Button unelevated>
          <ButtonIcon use="account_box" />
          <span>{user ? user.firstName : 'Login'}</span>
        </Button>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default AppHeader;
