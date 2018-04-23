
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducer/index';

import App from './container/App'; 
import './style/index';

const store = createStore(todoApp, compose(applyMiddleware(thunk)));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// window.alert('ddd');
// (function test() {
//     console.log('eee');
// })()