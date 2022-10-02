import React from "react"
import cities from "../data/cities.json"

class Cities extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <ul>
                {cities.map(city => <li>{city}</li>)}
            </ul>
        )
    }
}

export default Cities
