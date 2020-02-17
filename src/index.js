import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';


import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk, createLogger()) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));