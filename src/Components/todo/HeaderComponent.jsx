import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'



class HeaderComponent extends Component {
    render() {
        const isUserLoggedin = AuthenticationService.isUserLogin()
        //console.log('inside HeaderComponent')


        return (

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">in28menitus</div>
                    <ul className="navbar-nav">

                        {isUserLoggedin && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>

            </header>



        )
    }
}

export default HeaderComponent