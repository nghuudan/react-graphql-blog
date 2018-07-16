import React from 'react';
import { shallow } from 'enzyme';
import AppBody from './app-body';

describe('AppBody', () => {
  const wrapper = shallow(<AppBody />);

  it('should be a main tag', () => {
    expect(wrapper.is('main')).toBe(true);
  });
});
