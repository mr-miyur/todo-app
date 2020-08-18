import Axios from "axios"
class TodoDataService{

    retriveAllTodos(name){
        //console.log('Hello world service')
        return Axios.get(`http://localhost:8080/users/${name}/todos`)
        
    }


    deleteTodosById(name,id){
        //console.log('Hello world service')
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
        
    }

}

export default new  TodoDataService()