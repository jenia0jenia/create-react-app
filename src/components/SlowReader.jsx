import React, { useEffect } from "react"
import Reader from "../text/reader"

export default function SlowReading(props) {
    const ref = React.useRef()
    const reader = new Reader(props.selector)

    useEffect(() => {
        reader.start()
        console.log(ref);
        ref &&
            ref.current.addEventListener(
                "wheel",
                (e) => {
                    reader.factorWheel(e)
                },
                { passive: false }
            )
    })

    return (
        <div
            className={`slow-reader ${props.className}`}
            ref={ref}
            onMouseOver={reader.allowScroll}
            onMouseOut={reader.denyScroll}
        >
            <div className="slow-reader-inner">
                <div className="slow-reader-words">
                    {props.text.split(" ").map((word, i) => (
                        <span key={i} data-word-index={i}>
                            {word}{" "}
                        </span>
                    ))}
                </div>
                <button onClick={reader.toggle} className="play slow-reader-play">
                    Pause/Play
                </button>
            </div>
        </div>
    )
}
