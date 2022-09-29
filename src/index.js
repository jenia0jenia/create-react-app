import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// root.render(<App />)

// function Clock(props) {
//     return (
//         <div>
//             <h1>Сейчас {props.date}.</h1>
//         </div>
//     )
// }

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div>
                <h1>Сейчас {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div>
        <App />
        <Clock />
        <Clock />
        <Clock />
        <Clock />
    </div>
)
