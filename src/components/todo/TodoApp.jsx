import { useState } from "react"
import "./TodoApp.css"

export default function TodoApp(){
    return (
        <div className="TodoApp">
            <LoginComponent />
        </div>
    )
}

function LoginComponent(){

    let [username, setUsername]= useState('azizowaisi')
    let [password, setPassword] = useState('dummy')
    let [showSuccessMessage, setShowSuccessMessage] = useState(false)
    let [showErrorMessage, setShowErrorMessage] = useState(false)

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
            console.log('success')
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
            console.log('fail')
        }
    }

    return(
        <div className="Login">
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
            Welcome Component
        </div>
    )
}