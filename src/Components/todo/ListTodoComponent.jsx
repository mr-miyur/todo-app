import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                // { id: 1, description: 'Learn React' },
                // { id: 2, description: 'Build full stack app' },
                // { id: 3, description: 'Deploy it on server' }
            ],
            message : null

        }
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
        
        
    }

componentDidMount(){
    this.refreshTodos()
    
}

refreshTodos(){
    let username = AuthenticationService.getUserName()
    TodoDataService.retriveAllTodos(username)
        .then(
        response => 
            {
                console.log(response)
                this.setState({
                    todos : response.data
                })
                
            }
        )

}

deleteTodoClicked(id){
    let username = AuthenticationService.getUserName()
    //console.log(id+" "+username)
    TodoDataService.deleteTodosById(username,id)
    .then(
        response => {
            this.setState({message :  `Deletion of ${id} Succesfull`})
            this.refreshTodos()
        }
    )
}

updateTodoClicked(id){

    console.log(`Update id is ${id}`)
    this.props.history.push(`/todos/${id}`)
    // let username = AuthenticationService.getUserName()
    // //console.log(id+" "+username)
    // TodoDataService.deleteTodosById(username,id)
    // .then(
    //     response => {
    //         this.setState({message :  `Deletion of ${id} Succesfull`})
    //         this.refreshTodos()
    //     }
    // )
}


    render() {
        return (
            <>
                <h1>List of Todo</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>TargetDate</th>
                                <th>is Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate}</td>
                                            <td>{todo.isDone}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )


                            }
                        </tbody>

                    </table>
                </div>
            </>
        )
    }


    
}

export default ListTodoComponent