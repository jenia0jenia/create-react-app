import settings from "../settings.js";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";
import Fade from "@mui/material/Fade";
import { SlowReader } from "../components/SlowReader";

export default function Nasa() {
    const [nasa, setNasa] = useState(null);

    useEffect(() => {
        fetch(settings.NASA_URL)
            .then((res) => res.json())
            .then((res) => {
                setNasa(res);
            });
    }, []);
    return (
        <div>
            {nasa && nasa?.media_type === "image" ? (
                <Fade in>
                    <div>
                        <h4>{nasa.title}</h4>
                        <a
                            className="nasa-image"
                            href={nasa.hdurl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={nasa.url} alt={nasa.title} />
                        </a>
                        <SlowReader 
                        id="slow-reader-home"
                        settings={{
                            showSettings: false,
                            wpm: 100,
                            minHeight: false,
                            border: false,
                            text: nasa.explanation
                        }}></SlowReader>
                        <p>{nasa.copyright}</p>
                    </div>
                </Fade>
            ) : (
                <Loading></Loading>
            )}
        </div>
    );
}
