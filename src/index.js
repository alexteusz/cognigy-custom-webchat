import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// reducer 
import reducer from './store/reducer';

// create redux store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// provide the redux store to the whole browser window, so that you can change the global redux state
// from whereever you want in the browser window.
window.reduxStore = store;


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
