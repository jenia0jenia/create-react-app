import React, { useState, useEffect } from "react"
// import Counter from "./components/Counter"
// import Clock from "./components/Clock"
// import Cities from "./components/Cities"
import Text from "./components/Text"
import "./styles/App.css"
import textPath from "./data/text.txt"


function App() {
    const [text, setText] = useState([])

    useEffect(() => {
        fetch(textPath)
            .then((res) => res.text())
            .then((res) => {
                setText(res.split(" "))
            })
    }, [])

    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    {/* <Counter /> */}
                    {/* <Clock /> */}
                    {/* <Cities /> */}
                    <Text text={text} />
                </div>
            </div>
        </div>
    )
}

export default App
