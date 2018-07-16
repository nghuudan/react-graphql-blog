import React from 'react';
import { Query } from 'react-apollo';
import { shallow } from 'enzyme';
import AppHeader from './app-header';
import AppHeaderContainer from './app-header-container';

describe('AppHeaderContainer', () => {
  const wrapper = shallow(<AppHeaderContainer />);
  const query = wrapper.find(Query);
  const Child = query.props().children;
  const dataMock = {};
  const childWrapper = shallow(<Child data={dataMock} />);

  it('should render AppHeader', () => {
    expect(childWrapper.find(AppHeader)).toHaveLength(1);
  });
});
