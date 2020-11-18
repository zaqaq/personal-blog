import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducers from './redux'
//import { CountProvider } from './page/type-link/useCount-context'
import axios from './assets/js/axios'
//import { ThemeContext, themes } from './page/hooks/context'

const store = createStore(rootReducers);
React.$axios = axios;

ReactDOM.render(
        // <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        //</React.StrictMode>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
