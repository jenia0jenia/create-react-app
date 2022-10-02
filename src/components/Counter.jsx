import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 })
    }

    dec = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}

export default Counter
