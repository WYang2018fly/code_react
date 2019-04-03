import React, {Component} from 'react';
//default to find file path in node_modules
//advice to use this style of writing code
import logo from './logo.svg';
//get picture source through 'import'

import './App.css';

import Head from "./components/head/index";
import Main from "./components/Main/index"

//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head></Head>
        <Main></Main>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={require('./static/img/spring.png')} alt=""/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
