import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function HeaderComponent(){

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout (){
        authContext.logout()
    }

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://teckiz.com/website/"> Teckiz</a>
                            <ul className="navbar-nav">
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/"> Home</Link></li>}
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/todos"> Todos</Link></li>}
                                
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/login"> Login</Link></li>}
                            {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={logout}> Logout</Link></li>}
                        </ul>
                    </nav>
                </div>        
            </div>
        </header>
        
    )
}

export default HeaderComponent