import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate, useParams, Link } from "react-router-dom"
import "./TodoApp.css"

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <HeaderComponent />
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/welcome/:username' element={<WelcomeComponent />} />
                <Route path='/todos' element={<ListTodosComponent />} />
                <Route path='/logout' element={<LogoutComponent />} />

                <Route path='/*' element={<ErrorComponent />} />
            </Routes>
            </BrowserRouter>
            <FooterComponent />
        </div>
    )
}

function LoginComponent(){

    let [username, setUsername]= useState('azizowaisi')
    let [password, setPassword] = useState('dummy')
    let [showSuccessMessage, setShowSuccessMessage] = useState(false)
    let [showErrorMessage, setShowErrorMessage] = useState(false)
    let navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username === "azizowaisi" && password === "dummy"){
            setShowErrorMessage(false)
            setShowSuccessMessage(true)
            navigate(`/welcome/${username}`)
            console.log('success')

        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            navigate('/logout')
            console.log('fail')
        }
    }

    return(
        <div className="Login">
            <h1>Login page</h1>
            {showErrorMessage && <div className="ErrorMessage">Authentication Failed. Please check your credentials</div>}
            {showSuccessMessage && <div className="SuccessMessage">Authenticated Successfully</div>}
        
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}> Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){

    let {username} = useParams()

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                Your todos. <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apology for the 404. Reach out to our team at @teckiz.com</div>
        </div>
    )
}

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
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
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

function HeaderComponent(){
    return(
        <div className="Header">
            Header <hr />
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="Footer">
            <hr/>
            Footer
        </div>
    )
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>Thank you for using our services.</div>
        </div>
    )
}