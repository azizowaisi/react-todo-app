import { useEffect, useState } from "react"
import { retrieveAllTodosForUsername } from "./api/TodoApiService"

function ListTodosComponent(){

    const [todos, setTodos] = useState([])
    
    let today = new Date()
    let targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    
    function refreshTodo(){
        retrieveAllTodosForUsername('azizowaisi')
        .then(response =>  setTodos(response.data))
        .catch(error => console.log(error))
    }

    useEffect(
        () => refreshTodo(), []
    )    

    return(
        <div className="container">
            <h1 >Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                            <tr key={todo.id}>
                                                <td>{todo.id}</td>
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{todo.targetDate.toString()}</td>
                                            </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent