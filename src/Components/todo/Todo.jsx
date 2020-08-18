import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticateRoute from './AuthenticateRoute.jsx'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import ListTodoComponent from './ListTodoComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'

class Todo extends Component {

    render() {
        return (
            <div className="Todo">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticateRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticateRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticateRoute path="/todos" component={ListTodoComponent} />
                            <AuthenticateRoute path="/logout" component={LogoutComponent} />
                            LogoutComponent
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>

                {/*<LoginComponent/>
            <Welcome/>*/}
            </div>



        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } else {
//         return null
//     }

// }
// 
// function ShowSuccessMessage(props) {
// if (props.showSuccessMessage) {
// return <div>SuccessFull</div>
// } else {
// return null
// }
// 
// }

export default Todo