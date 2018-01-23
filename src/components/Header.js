import React, { Component } from 'react';

import SearchInput from './SearchInput';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <SearchInput />
      </div>
    );
  }
}

export default Header;