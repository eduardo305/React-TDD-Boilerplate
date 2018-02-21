import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import UserList from '../../src/components/UserList';

describe('<UserList />', () => {
  it('should exist', () => {
    const wrapper = shallow(<UserList />);
    expect(wrapper.length).to.equal(1);
  });

  it('should render zero items', () => {
    const wrapper = shallow(<UserList />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined users', () => {
    const wrapper = shallow(<UserList users={ undefined }/>);
    expect(wrapper.find('li')).to.have.length(0)
  });

  it('should render a few users', () => {
    const wrapper = shallow(<UserList users={['John Locke', 'Jack Sheppard', 'Tom Sawyer']} />)
    expect(wrapper.find('li')).to.have.length(3);
  });
});