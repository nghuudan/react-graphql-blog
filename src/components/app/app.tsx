import React, { StatelessComponent } from 'react';
import AppHeader from '../app-header/app-header-container';
import AppBody from '../app-body/app-body';
import AppDrawer from '../app-drawer/app-drawer';

export interface AppProps {
  isDrawerOpen: boolean;
  toggleDrawer(): void;
}

const App: StatelessComponent<AppProps> = ({ isDrawerOpen, toggleDrawer }) => (
  <div className="app">
    <AppHeader toggleDrawer={toggleDrawer} />
    <AppBody />
    <AppDrawer isOpen={isDrawerOpen} toggleOpen={toggleDrawer} />
  </div>
);

export default App;
