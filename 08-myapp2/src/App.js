import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Head from "./components/head/index.jsx";
import Foot from "./components/foot/index.jsx";

import pic  from "./static/img/spring.png";

class App extends Component {
  state = {
    location: 'shanghai'
  }

  handleClick = (e)=>{
    const h1 = document.querySelector('h1')
    // const {target, keyCode} = e
    // console.log(this._foot)
    // console.log(this.refs.title.style.background = 'pink')
    ReactDOM.findDOMNode(h1).style.background = 'pink'
    this.setState({
      location: 'shenzhen'
    })
  }

  render() {
    return (
      <div className="App">
          <h1
              onClick={this.handleClick}
              ref={'title'}
          >myapp2</h1>
          <Head location={this.state.location}></Head>
          <img
              src={require('./static/img/spring.png')}
              width={'150'}
              alt=""
          />
          <br/>
          <hr/>
          <img src={pic} width={'150'}  alt=""/>
          <Foot
              ref={foot=>this._foot=foot}
          ></Foot>
      </div>
    );
  }
}

export default App;
