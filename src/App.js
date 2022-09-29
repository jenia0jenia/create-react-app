import React from "react"
import { useState } from "react"
import Counter from "./components/counter"
import ClassCounter from "./components/classCounter"

function App() {
    const [value, setValue] = useState("")

    return (
        <div className="App">
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Counter></Counter>
            <ClassCounter></ClassCounter>
        </div>
    )
}

export default App
