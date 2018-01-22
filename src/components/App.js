import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Spinner from './Spinner';

export default () => {
    return (
        <div className='App' style={{ maxWidth: '920px', margin: 'auto' }}>
            <Spinner />
            <Header />
            <Main />
        </div>
    );
}