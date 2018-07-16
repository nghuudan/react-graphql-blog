import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import AppHeader from '../app-header/app-header-container';
import AppBody from '../app-body/app-body';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render AppHeader', () => {
    expect(wrapper.find(AppHeader)).toHaveLength(1);
  });

  it('should render AppBody', () => {
    expect(wrapper.find(AppBody)).toHaveLength(1);
  });
});
