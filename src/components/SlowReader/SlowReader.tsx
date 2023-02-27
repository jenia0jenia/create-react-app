import { useEffect } from "react";
import Reader from "utils/reader";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";

import "./SlowReader.css";

function SlowReader({ id, settings }) {
    const reader: Reader = new Reader(`#${id}`);
    // const ref = useRef();

    useEffect(() => {
        reader.start();
        reader.setSettings(settings);
        // ref.current.addEventListener(
        //     "wheel",
        //     (e) => {
        //         reader.factorWheel(e);
        //     },
        //     { passive: false }
        // );
    }, [settings]);

    function onChangeWpm(event) {
        reader.setSettings({
            wpm: +event.target.value || 300,
        });
    }

    return (
        id && (
            <div>
                <Grid container spacing={2}>
                    <Grid
                        id={id}
                        item
                        xs={settings.showSettings ? 8 : 12}
                        className={`slow-reader`}
                        // ref={ref}
                        onMouseOver={reader.allowScroll}
                        onMouseOut={reader.denyScroll}
                    >
                        <div className="slow-reader-inner" style={{
                            border: settings.minHeight || 'none'
                        }}>
                            <div className="slow-reader-words" style={{
                                minHeight: settings.minHeight || 'none'
                            }}>
                                {settings.text && settings.text.split(" ").map((word, i) => (
                                    <span key={i} data-word-index={i}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </div>
                            {settings.showPauseButtonOnText && (
                                <Button
                                    variant="contained"
                                    onClick={reader.toggle}
                                    className="play slow-reader-play"
                                >
                                    PAUSE
                                </Button>
                            )}
                        </div>
                    </Grid>
                    {settings.showSettings && (
                        <Grid item xs={4}>
                            <div className="slow-reader-settings">
                                <Typography id="non-linear-slider" gutterBottom>
                                    Слов в минуту (wpm)
                                </Typography>
                                <Slider
                                    defaultValue={settings.wpm}
                                    min={100}
                                    step={25}
                                    max={600}
                                    aria-label="Default"
                                    valueLabelDisplay="auto"
                                    onChange={onChangeWpm}
                                />
                                <Button
                                    variant="contained"
                                    onClick={reader.toggle}
                                    className="play"
                                >
                                    PAUSE
                                </Button>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    );
}

// SlowReader.propType = {
//     id: PropTypes.string.isRequired,
// };

export default SlowReader;
