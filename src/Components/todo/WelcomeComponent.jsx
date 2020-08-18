import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'


class WelcomeComponent extends Component {
constructor(props){
    super(props)
    this.state={
        welcomeMessage : ''
    }
    this.retriveWelcomeMessage=this.retriveWelcomeMessage.bind(this)
    this.handelSuccessMessage=this.handelSuccessMessage.bind(this)
    this.handelerrorMessage=this.handelerrorMessage.bind(this)
}

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. To get all todo click <Link to="/todos">here</Link>
                 </div>
                 <div className="container">
                    To get all todo click <Link to="/todos">here</Link>
                    <button className="btn btn-success" onClick={this.retriveWelcomeMessage}>Click to get welcome message</button>
                 </div>
                 <div className="container">
                     {this.state.welcomeMessage}
                 </div>
            </>
        )
    }

    retriveWelcomeMessage(){
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response =>this.handelSuccessMessage(response))
        .catch(error =>this.handelerrorMessage(error))
        
    }

    handelSuccessMessage(response){
        console.log(response)
        this.setState({
            welcomeMessage : response.data.name
        })
    }
    
    handelerrorMessage(error){
        console.log(error.response)
        this.setState({
            welcomeMessage : error.response.data.message
        })
    }
}

export default WelcomeComponent