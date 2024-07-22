import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    render () {
        return(
            <div className="flex item-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="bg-black text-white p-2"
                onClick={ ()=> this.setState({ count: this.state.count + 1 }) }>+</button>
            </div>
        )
    }
};

export default Counter; 