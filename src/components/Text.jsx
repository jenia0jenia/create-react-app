import React, { useEffect } from "react"
import SlowReading from "../text/slowReading"
import text from "../data/text"

function Text() {
    const ref = React.useRef()
    const slowReading = new SlowReading(".slow-text")

    useEffect(() => {
        slowReading.start()
        ref &&
            ref.current.addEventListener(
                "wheel",
                (e) => {
                    // console.log(e)
                    slowReading.factorWheel(e)
                },
                { passive: false }
            )
    })

    return (
        <div
            className="slow-text"
            ref={ref}
            onMouseOver={slowReading.allowScroll}
            onMouseOut={slowReading.denyScroll}
        >
            <div className="slow-text__inner">
                {text.split(" ").map((word, i) => (
                    <span key={i} data-word-index={i}>
                        {word}{" "}
                    </span>
                ))}
                <button onClick={slowReading.toggle} className="play">
                    Pause/Play
                </button>
            </div>
        </div>
    )
}

export default Text
