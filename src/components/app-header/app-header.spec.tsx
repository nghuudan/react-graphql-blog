import React from 'react';
import { Button } from 'rmwc/Button';
import { shallow } from 'enzyme';
import { TopAppBar } from 'rmwc/TopAppBar';
import AppHeader from './app-header';

describe('AppHeader', () => {
  const wrapper = shallow(<AppHeader />);

  it('should render TopAppBar', () => {
    expect(wrapper.find(TopAppBar)).toHaveLength(1);
  });

  it('should render the user firstName', () => {
    const userMock = { firstName: 'Test' };
    wrapper.setProps({ user: userMock });
    expect(wrapper.find(Button).find('span').text()).toBe('Test');
  });
});
