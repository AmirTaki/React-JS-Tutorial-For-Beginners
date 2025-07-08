import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0, 

        }
    }
    increment () {
        //  this.state.counter = 1
        this.setState({
            counter : this.state.counter + 1
        })
    }
    decrement() {
        this.setState({
            counter : this.state.counter - 1
        })
    }
    render(){
        return(<>
            <h3>Count value is : {this.state.counter} </h3>
            <button onClick={()=>this.increment()}>increment</button>
            <button onClick={()=>this.decrement()}>decrement</button>
        </>)
    } 
}
export default Counter;