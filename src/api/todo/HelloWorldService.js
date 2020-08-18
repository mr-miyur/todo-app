import Axios from "axios"

class HelloWorldService {

    executeHelloWorldService(){
        //console.log('Hello world service')
        return Axios.get('http://localhost:8080/hello')
        
    }

    executeHelloWorldPathVariableService(name){
        //console.log('Hello world service')
        return Axios.get(`http://localhost:8080/hello/pathvariable/${name}`)
        
    }
}

export default new HelloWorldService()