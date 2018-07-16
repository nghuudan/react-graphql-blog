import React from 'react';
import { Drawer } from 'rmwc/Drawer';
import { shallow } from 'enzyme';
import AppDrawer from './app-drawer';

describe('AppDrawer', () => {
  const wrapper = shallow(<AppDrawer />);

  it('should render Drawer', () => {
    expect(wrapper.find(Drawer)).toHaveLength(1);
  });
});
