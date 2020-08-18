import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: 'mayur',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,


        }

        // this.handleUserName=this.handleUserName.bind(this)
        // this.handlePassword=this.handlePassword.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    handleChange(event) {
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value

        })

    }

    /*handleUserName(event){
        console.log(event.target.value)
        this.setState({userName:event.target.value})
     
    }

    handlePassword(event){
        console.log(event.target.value)
        this.setState({password:event.target.value})
     
    }*/

    loginClicked() {
        //console.log(this.state)

        if (this.state.userName === 'mayur' && this.state.password === '1234') {
            //console.log('success')
            AuthenticationService.registerSuccessfullLogin(this.state.userName, this.state.password)
            this.props.history.push(`/welcome/${this.state.userName}`)
            //this.setState({ showSuccessMessage: true })
            //this.setState({ hasLoginFailed: false })
        } else {
            console.log('failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>SuccessFull</div>}
                    {/*<ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
            UserName :-<input type="text" name="userName" placeholder="Enter Username" value={this.state.userName} onChange={this.handleChange} />
            Password :-<input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }


}

export default LoginComponent