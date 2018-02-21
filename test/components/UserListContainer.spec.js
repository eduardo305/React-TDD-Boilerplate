import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import UserListContainer from '../../src/components/UserListContainer';
import InputArea from '../../src/components/InputArea';
import UserList from '../../src/components/UserList';

describe('<UserListContainer>', () => {
  it('should render a InputArea and UserList', () => {
    const wrapper = shallow(<UserListContainer />);
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <UserList />
    ])).to.equal(true);
  })

  it('should start empty', () => {
    const wrapper = shallow(<UserListContainer />);
    expect(wrapper.state('users')).to.be.eqls([]);
  });

  it('should be able to add users', () => {
    const wrapper = shallow(<UserListContainer />);
    wrapper.instance().addUser('Rick Grimes');
    expect(wrapper.state('users')).to.be.eqls(['Rick Grimes']);
  });

  it('should pass addUser as a property to the InputArea component', () => {
    const wrapper = shallow(<UserListContainer />);
    const inputArea = wrapper.find(InputArea);
    const addUser = wrapper.instance().addUser;
    expect(inputArea.prop('onSubmit')).to.eql(addUser);
  });

  it('should pass a bound addUser function to InputArea component', () => {
    const wrapper = shallow(<UserListContainer />);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop('onSubmit')('Rick Grimes');
    expect(wrapper.state('users')).to.be.eqls(['Rick Grimes']);
  });
})