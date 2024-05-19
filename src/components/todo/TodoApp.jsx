import { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import "./TodoApp.css"

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />}></Route>
                <Route path='/login' element={<LoginComponent />}></Route>
                <Route path='/welcome' element={<WelcomeComponent />}></Route>
                <Route path='/*' element={<ErrorComponent />}></Route>
            </Routes>
            </BrowserRouter>
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
            navigate('/welcome')
            console.log('success')

        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
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
    return(
        <div className="Welcome">
            <h1>Welcome</h1>
            <div >
            Welcome Component
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