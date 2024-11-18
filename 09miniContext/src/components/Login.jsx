import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext"

function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
       e.preventDefault()
       setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            type="text" />
            {" "}
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password" />
            <button
            onClick={handleSubmit}
            >Submit</button>
        </div>
    );
}

export default Login