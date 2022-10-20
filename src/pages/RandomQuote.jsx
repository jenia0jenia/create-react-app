import axios from "axios";
import { useEffect, useState } from "react";
import { SlowReader } from "../components/SlowReader";
import quotes from "../api/quotes";
// import Button from "@mui/material/Button";

export default function Text() {
    const [settings, setSettings] = useState({
        showSettings: true,
        showPauseButtonOnText: false,
        border: true,
        wpm: 300,
        text: "",
    });
    const [enableNewQuote, setEnable] = useState(true);

    useEffect(() => {
        if (enableNewQuote) {
            setEnable(false);
            axios
                .get(`${quotes.url}${quotes.qotd}`)
                .then((res) => {
                    setSettings({
                        ...settings,
                        text: res.data.quote.body,
                    });
                })
                .catch(console.warn);
        }
        // getNewQuote();
    }, [enableNewQuote]);

    // function getNewQuote(event) {
    //     console.log("click");
    // }

    return (
        settings.text && (
            <>
                <SlowReader settings={settings} id={`slow-reader-uniq`}>
                    {/* <Button
                        margin="normal"
                        label={'margin="normal"'}
                        color="secondary"
                        onClick={() => {
                            setEnable(!enable);
                        }}
                        disabled={enable}
                    >
                        New Quote
                    </Button> */}
                </SlowReader>
            </>
        )
    );
}
