import { Component } from "react";

class Message extends Component {
    render (){
        return (
            <>
                <h1>Message :  {this.props.messagecontent}</h1>
                <h3>code : {this.props.messageCode}</h3>
            </>
        )
    }
}


export default Message ;