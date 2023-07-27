import { useState } from "react"

const ConditionalRendering = () => {
    const [isLoggedIn, setIsloggedIn] = useState(false)

    let message;

    if(isLoggedIn){
            message =<p>Welcome, user</p>
        }
    else{
            message =<p>Please Login!</p>
    }

    function handleLogin(){
        setIsloggedIn(true)
    }

    return (
        <div>{
            isLoggedIn ? <p>Welcome, user</p> : <p>Please Login!</p>
            // isLoggedIn && <p>Welcome, user</p>
            }
        <br />
        <button onClick={handleLogin}>Login</button>
        </div>
    )

}

export default ConditionalRendering