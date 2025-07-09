import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0, 
        }
        this.increment = this.increment.bind(this)
    }
    increment() {
        console.log(this)
        this.setState({
            counter : this.state.counter + 1
        })
    }
     
    
    
    decrement = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    handlingEventBind () {
        this.setState({
            counter : 0
        })
    }
    render(){
        return(<>
            <h3>Count value is : {this.state.counter} </h3>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={()=>{this.handlingEventBind()}}>bind event handling</button>
        </>)
    } 
}
export default Counter;