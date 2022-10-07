import SlowReading from "../components/SlowReader";
import text1 from "../data/text1"
import text2 from "../data/text2"
import text3 from "../data/text3"


export default function Text() {
    return (
        <div className="reader">
            <SlowReading
                selector=".slow-reader-1"
                className="slow-reader-1 m--small"
                text={text1}
            ></SlowReading>
            <SlowReading
                selector=".slow-reader-2"
                className="slow-reader-2 m--small"
                text={text2}
            ></SlowReading>
            <SlowReading
                selector=".slow-reader-3"
                className="slow-reader-3 m--small"
                text={text3}
            ></SlowReading>
        </div>
    );
}
