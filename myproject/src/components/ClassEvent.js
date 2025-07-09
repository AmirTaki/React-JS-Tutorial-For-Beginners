import { Component } from "react";

class ClassEvent extends Component {
    handleClick = () => {
        console.log("class Based event handling")
    }
    render() {
        return (
           <div>
            This is a class based components
            <button onClick={this.handleClick} >Click</button>
           </div>
        )
    }
}

export default ClassEvent;