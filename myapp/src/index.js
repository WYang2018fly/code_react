import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//create-react-app base on webpack,so it can compile css/less/sass
import App from './App';//root component --> html
//create-react-app import modules,modules names can be suffix-free
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//index.js is program entry,it means a start program