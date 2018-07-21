import React, { Component } from 'react';
import App from './app';

export interface AppContainerState {
  isDrawerOpen: boolean;
}

export default class AppContainer extends Component<any, AppContainerState> {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer() {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  }

  render() {
    return (
      <App
        isDrawerOpen={this.state.isDrawerOpen}
        toggleDrawer={this.toggleDrawer.bind(this)}
      />
    );
  }
}
