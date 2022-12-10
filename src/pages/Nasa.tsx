import axios from "axios";
import settings from "../settings";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";
import Fade from "@mui/material/Fade";
import SlowReader from "../components/SlowReader/SlowReader";

export default function Nasa() {
    const [nasa, setNasa] = useState(null);

    useEffect(() => {
        axios
            .get(settings.NASA_URL)
            .then((res) => {
                setNasa(res.data);
            })
            .catch(console.log);
    }, []);

    return (
        <div>
            {nasa ? (
                <div>
                    {nasa.media_type === "image" ? (
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
                            </div>
                        </Fade>
                    ) : (
                        <div>
                            <Fade in>
                                <div>
                                    <h4>{nasa.title}</h4>
                                    <iframe
                                        title={nasa.title}
                                        width="560"
                                        height="315"
                                        src={nasa.url}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </div>
                            </Fade>
                        </div>
                    )}
                    {
                        <>
                            <SlowReader
                                id="slow-reader-home"
                                settings={{
                                    showSettings: false,
                                    wpm: 300,
                                    minHeight: false,
                                    border: false,
                                    text: nasa.explanation,
                                }}
                            ></SlowReader>
                            <p>{nasa.copyright}</p>
                        </>
                    }
                </div>
            ) : (
                <Loading></Loading>
            )}
        </div>
    );
}
