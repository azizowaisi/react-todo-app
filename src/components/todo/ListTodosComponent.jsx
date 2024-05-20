
function ListTodosComponent(){

    let today = new Date()
    let targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    let todos =  [
                    {id:1, description: 'Learn AWS Solution Architect', done:false, targetDate:targetDate},
                    {id:2, description: 'Learn AWS Developer Associate', done:false, targetDate:targetDate},
                    {id:3, description: 'Learn AWS System Administration', done:false, targetDate:targetDate}

                ]

    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td><strong>Id</strong></td>
                            <td>Description</td>
                            <td>Done</td>
                            <td>Target date</td>
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
                                                <td>{todo.targetDate.toDateString()}</td>
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