import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

export default () => {
    return (
        <div className='App' style={{ maxWidth: '920px', margin: 'auto' }}>
            <Header />
            <Main />
        </div>
    );
}