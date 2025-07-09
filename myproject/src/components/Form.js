import { Component } from "react";

class Form extends Component {
    
    state = {
        firstname : "",
        lastname : ''
    }
    handleChange = (event) => {
        this.setState({firstname : event.target.value})
        console.log(this.state.firstname)
    };

    handleChangeLastName = (event) => {
        this.setState({lastname : event.target.value})
        console.log(this.state.lastname)
    }
    
    render(){
        return(
            <div>Form
                <form>
                    <label>firstName : </label>
                    <input 
                        type = "text" 
                        value = {this.state.firstname}
                        onChange={this.handleChange}
                    ></input>
                    <label>lastName : </label>
                    <input
                        type = "text"
                        value = {this.state.lastname}
                        onChange={this.handleChangeLastName}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default Form