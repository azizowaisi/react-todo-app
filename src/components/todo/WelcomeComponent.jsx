import {  useParams, Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"
import { retrieveHelloWorlBean } from "./api/HelloWorldApiService"

function WelcomeComponent(){

    let {username} = useParams()
    let [message, setMessage] = useState(null)

    function callHelloWorlResApi(){
        console.log("called")
        retrieveHelloWorlBean()
        .then((response)=>successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))

    }

    function successfulResponse(response){
        console.log(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                Your todos. <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorlResApi}>Call World API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent