import { Component } from "react";

const displayMessage = () => {
    return "anther message Compnenets"
}

class Message extends Component {
    render (){
        return(
            <>
                <h1>This  is a class Components</h1>
                {displayMessage()}
            </>
        )
    }   
}

export default Message ;