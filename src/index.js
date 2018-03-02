import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';


import User from './ducks/user';
import registerSaga from './sagas';


const rootReducer = combineReducers({
    user: User
});


let middlewares = [];

const sagasMiddleware = createSagaMiddleware();

middlewares.push(sagasMiddleware);

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer, devToolsEnhancer());
registerSaga(sagasMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
