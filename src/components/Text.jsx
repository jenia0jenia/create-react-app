import React, { useEffect } from "react"
import SlowReading from "../text/slowReading"

function Text(props) {
    const domRef = React.createRef()

    useEffect(() => {
        const slowReading = new SlowReading(".slow-text")
        slowReading.start()
    }, [props.text])

    return (
        <div className="slow-text" ref={domRef}>
            {props.text.map((word, i) => (
                <span key={i} data-word-index={i}>
                    {word}{" "}
                </span>
            ))}
        </div>
    )
}

export default Text
