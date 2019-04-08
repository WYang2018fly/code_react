import React, {Component} from 'react';
import Head from "./components/head/index.jsx";
import Main from "./components/main/index.jsx";
import Footer from "./components/footer/index.jsx";
import Info from "./components/info/index";

class App extends Component {
  state = {
    list: [
      {
        name: 'Laoyumi',
        id: Math.random()
      },
      {
        name: 'Laozhu',
        id: Math.random()
      },
      {
        name: 'Feng',
        id: Math.random()
      }
    ]
  }

  handleOutputItem = (e)=>{
    const {target,keyCode} = e
    //when input data equals 13,do nothing
    if(keyCode !== 13){
      return
    }
    //delete space character in start and ends of data
    const txt = target.value.trim()
    //when input data is null,do nothing
    if(!txt.length){
      return
    }

    //this only static data,you want to update data in view automatically and should use 'setState'
    /*this.state.list.push({
        name: txt
    })*/

    //definite a parameter list(array) to save the list in components state
    const list = this.state.list
    //push new data to parameter list(array)
    list.push({
      id: Math.random(),
      name: txt
    })
    //update list in components state
    this.setState({
      list: list
    })

    target.value = ''
  }

  handleRemoveItem = (index)=>{
    const data = this.state.list
    data.splice(index,1)

    this.setState({
      list: data
    })
  }

  render() {
    return (
        <div>
          <section className="todoapp">
            {
              //First step
              //Use components property to definite a function in parent components
            }
            <Head keydown={this.handleOutputItem}></Head>
            {/*!-- This section should be hidden by default and shown when there are todos --*/}
            {
              this.state.list.length > 0 && (
                  <Main
                      rmFn={this.handleRemoveItem}
                      acFn={this.handleAddClassName}
                      data={this.state.list}
                  >
                  </Main>

              )
            }
            {/*!-- This footer should hidden by default and shown when there are todos --*/}
            <Footer
                data={this.state.list}
            ></Footer>
          </section>
          <Info></Info>
        </div>
    );
  }
}

export default App;
