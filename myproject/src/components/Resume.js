import { Component } from "react"


class Resume extends  Component {
    render(){
        const {message} = this.props
        return(
            <>  
            <h1>This is a class components : {message} </h1>
            </>
        )
    }
}
export default Resume 