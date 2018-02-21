import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon'; 

import InputArea from '../../src/components/InputArea';

describe('<InputArea />', () => {
  it('should exist', () => {
    const wrapper = shallow(<InputArea />);
    expect(wrapper.length).to.equal(1);
  });

  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>
    ])).to.be.equal(true);
  });

  it('should accept any typed text', () => {
    const wrapper = shallow(<InputArea />);
    const input = wrapper.find('input');
    input.simulate('change', {
      target: {
        value: 'John Locke'
      } 
    });
    expect(wrapper.state('value')).to.eq('John Locke');
    // expect(input.prop('value')).to.equal('John Locke');
  });

  it('should call onSubmit when Add button is clicked', () => {
    const addUserSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={ addUserSpy } />);
    const button = wrapper.find('button');
    wrapper.setState({ value: 'Jack Shepard' });

    button.simulate('click');
    
    expect(addUserSpy.calledOnce).to.equal(true);
    expect(addUserSpy.calledWith('Jack Shepard')).to.equal(true);
  });
});