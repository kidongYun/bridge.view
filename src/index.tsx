import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './global-styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <GlobalStyle/>
    </Provider>
    ,
    document.getElementById('root')
);