import React from 'react'

export default class List extends React.Component {
    render() {
        const {list} = this.props
        return (
            <div>
                <ol>
                    {
                        list.map((item, index) => {
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
            </div>
        );
    }
}
