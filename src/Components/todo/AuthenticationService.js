class AuthenticationService {

    registerSuccessfullLogin(username,password) {
        console.log('registerSuccessfullLogin')
        sessionStorage.setItem('authentication', username)

    }

    logout(){
        console.log('AuthenticationService.logout')
        sessionStorage.removeItem('authentication')
    }

    isUserLogin(){
        //console.log('AuthenticationService.isUserLogin')
        let userLogin = sessionStorage.getItem('authentication')
        if(userLogin===null){
            return false
        }else{
            return true
        }

    }

    getUserName(){
        //console.log('AuthenticationService.isUserLogin')
        let username = sessionStorage.getItem('authentication')
        if(username===null){
            return false
        }else{
            return username
        }

    }
}

export default new AuthenticationService()