import { useState } from "react"

const EventHandling = () =>{
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count+1)
    }

    function handleReset(){
        setCount(0)
    }
    return (
        <div>
            <h1>Hvent Handling</h1>
            <p>count : {count}</p>
            <button onClick={handleClick}>Incremnet</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default EventHandling