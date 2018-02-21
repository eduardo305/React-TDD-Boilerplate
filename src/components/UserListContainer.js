import React, { Component } from 'react';
import InputArea from './InputArea';
import UserList from './UserList';

class UserListContainer extends Component {

  state = {
    users: []
  };

  addUser = (user) => {
    this.setState({
      users: [ user, ...this.state.users ]
    })
  }

  render() {
    return (
      <div className='UserListContainer'>
        <InputArea onSubmit={ this.addUser } />
        <UserList users={ this.state.users } />
      </div>
    );
  }
}

export default UserListContainer;