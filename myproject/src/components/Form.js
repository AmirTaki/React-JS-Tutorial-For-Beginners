import { Component } from "react";

class Form extends Component {
    
    state = {
        firstname : "",
        lastname : ''
    }
    handleChange = (event) => {
        this.setState({firstname : event.target.value})
    };

    handleChangeLastName = (event) => {
        this.setState({lastname : event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            fName : this.state.firstname,
            lName : this.state.lastname
        })
    }

    
    render(){
        return(
            <div>Form
                <form onSubmit={this.handleSubmit}>
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
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form