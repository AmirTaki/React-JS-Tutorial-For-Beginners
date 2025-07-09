import { Component } from "react";

class Form extends Component {
    
    state = {
        firstname : ""
    }
    handleChange = (event) => {
        this.setState({firstname : event.target.value})
        console.log(this.state.firstname)
    };
    
    render(){
        return(
            <div>Form
                <form>
                    <input 
                        type = "text" 
                        value = {this.state.firstname}
                        onChange={this.handleChange}
                    ></input>
                </form>
            </div>
        )
    }
}

export default Form