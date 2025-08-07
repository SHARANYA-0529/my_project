import React, { Component } from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
        this.increamentCount=this.increamentCount.bind(this);
    }
    increamentCount(){
        this.setState((prevState)=>({
            count:prevState.count+1,
        }));
    }
    render(){
        return(
                <div>
                    <p>You clicked {this.state.count} times.</p>
                    <button onClick={this.increamentCount}>Click Me!</button>
                </div>
        );
    }
}

export default Counter;