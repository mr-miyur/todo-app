import  React ,{ Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";


class AuthenticateRoute extends Component{
    render(){
        //console.log('Inside AuthenticateRoute')
        
            if(AuthenticationService.isUserLogin()){
                return        <Route {...this.props}/>
            }else{
                return <Redirect to="/login"/>
            }
        
    }
}

export default AuthenticateRoute