import React from 'react';
import { shallow } from 'enzyme';
import AppContainer, { AppContainerState } from './app-container';
import App from './app';

describe('AppContainer', () => {
  const wrapper = shallow(<AppContainer />);

  it('should render App', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('should toggle isDrawerOpen in state', () => {
    const instance = wrapper.instance() as AppContainer;
    const state = wrapper.state() as AppContainerState;
    wrapper.setState({ isDrawerOpen: true });
    instance.toggleDrawer();
    expect(state.isDrawerOpen).toBe(false);
  });
});
