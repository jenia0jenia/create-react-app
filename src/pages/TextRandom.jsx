import SlowReader from "../components/SlowReader/SlowReader";
import text from "../data/text3";
import Grid from "@mui/material/Grid";
import { shuffleArray } from "../helpers/helpers";

export default function RandomQuote() {
    let gridArray = [4, 2, 3, 3];
    gridArray = shuffleArray(gridArray);
    return (
        <Grid container spacing={2} className="reader">
            {gridArray.map((gridSize, i) => (
                <Grid key={i} item xs={gridSize}>
                    <SlowReader
                        id={`slow-reader-${i}`}
                        settings={{
                            wpm: 200 + Math.random() * 500,
                            text,
                        }}
                    ></SlowReader>
                </Grid>
            ))}
        </Grid>
    );
}
