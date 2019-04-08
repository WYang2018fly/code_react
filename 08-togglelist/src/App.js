import React, {Component} from 'react';
import './static/css/index.css'
import {dataList} from "./static/js/data2.js";
import Content from "./components/content/index.jsx";

class App extends Component {
    //state of element 'ol': unfold or close
    state = {
        arr: [true, false, false]
    }

    //get data
    getData = () => dataList

    //change state value
    handleChange = (i) => {
        // console.log('components of parent level',i)
        // operate other items,traversal all arr,set opposite value
        const arr = this.state.arr.map((item, index) => {
            //click operation is to unfold list,so return value 'true'
            if (index === i) return true
            return false
        })

        this.setState({
            arr
        })
        // console.log(arr)
    }

    render() {
        const data = this.getData()
        return (
            <div>
                {
                    Object.keys(data).map((item, index) => {
                        return (
                            <Content
                                key={index}
                                //data={data[list]}
                                //a={data[item].name}
                                //b={data[item].list}
                                {...data[item]}
                                index={index}
                                show={this.state.arr[index]}
                                change={this.handleChange}
                            ></Content>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
