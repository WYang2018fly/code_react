import React from 'react'
import List from "../list/index.jsx";

export default class Content extends React.Component {
    constructor() {
        // console.log(arguments);
        super(...arguments)
        this.state = {
            onOff: this.props.show
        }
        //constructor function execute only once
        //parent components app is already updated
        //but son components is unchanged
        //at this case,click other items,the first item is still unfolded
        //parent components data update,son components can use lifecycle
        //to get data from parent components

        // console.log(this.props.show)
    }

    //react lifecycle function: shouldComponentUpdate
    //it will be called when components receive new props or state
    //two parameters:
    //    nextProps(value of next props) and nextState(value of next state)
    //return value
    //  true: components continue to render
    //  false: stop to call render function
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState)
        //change onOff
        if (this.state.onOff !== nextProps.show) {
            this.setState({
                onOff: nextProps.show
            })
        }
        //unfold or close
        if (this.state.onOff !== nextState.onOff) {
            this.toggleList(nextState.onOff)
        }

        return true
    }

    //react lifecycle function: componentDidMount
    //After first render,only in client

    componentDidMount() { //window.onload
        this.toggleList(this.state.onOff)
    }

    toggleList = (onOff) => {
        const ele = this._list
        // console.log(ele)
        if (onOff) {
            ele.style.height = ele.scrollHeight + 'px'
        } else ele.style.height = 0
        //the style of unfold and close is decided by function toggleList
    }

    handleClick = () => {
        const onOff = !this.state.onOff
        this.setState({
            onOff
        })
        //unfold current list,close other lists
        //it means that each item which in arr should be invested
        //arr in element of parent level,so deal with this array
        //to call function in element of parent level

        // console.log(this.props.change)
        this.props.change(this.props.index)
    }

    render() {
        // console.log(this.props)
        const {name, list, index} = this.props
        return (
            <div>
                <h2 onClick={this.handleClick}>{index + 1}.{name}</h2>
                {
                    /*this.state.onOff && (
                        <ol>
                            {
                                list.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <p>{index + 1}.{item.name}</p>
                                            <p>{item.gender}</p>
                                            <p>{item.introduce}</p>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    )*/
                    <div
                        className="list"
                        ref={abc => this._list = abc}
                    >
                        <List list={list}></List>
                    </div>
                }
            </div>
        );
    }
}