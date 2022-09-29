import React from "react"
import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    console.log(value);
    console.log(count);

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return (
        <div className="App">
            <header>{count}</header>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={inc}>++</button>
            <button onClick={dec}>--</button>
        </div>
    )
}

export default App
