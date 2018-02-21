import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {

  renderUsers() {
    return this.props.users.map(user => <li key={ user }>{ user }</li> );
  }

  render() {
    return (
      <ul className='UserList'>{ this.renderUsers() }</ul>
    );
  }
}

UserList.defaultProps = {
  users: []
}

export default UserList