import { useEffect, useState } from "react";

export default function ListItemProgress({ progress, color }) {
    const [pr, setProgress] = useState(0);

    function animate() {
        setProgress((curState) => {
            if (curState < (progress || 100)) {
                requestAnimationFrame(animate);
                return curState + 1;
            }
        });
    }

    useEffect(animate, []);

    return (
        <div
            className="list-item-progress"
            style={{
                background: `${color}1a`,
            }}
        >
            <div
                className="list-item-progress-inner"
                style={{
                    width: `${pr}%`,
                    background: `linear-gradient(to right, #fff, ${
                        color || "blue"
                    })`,
                }}
            ></div>
        </div>
    );
}
