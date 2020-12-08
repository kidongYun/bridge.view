import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './global-styles';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <GlobalStyle/>
    </Provider>
    ,
    document.getElementById('root')
);