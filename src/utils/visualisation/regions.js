const [n, m] = [4, 5];
const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
let matrixMap = [];
let curLine = 0;
const regions = [];

getAllRegions();
getBestSquare();

function getAllRegions() {
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (!matrixMap[i][j] && matrix[i][j] === 1) {
                let len = regions.push({
                    start: [i, j],
                    end: [i, j],
                });
                findNeighbor([i, j], regions[len - 1]);
            }
        }
    }

    function findNeighbor([x, y], region) {
        // matrix[x][y] = 0;
        matrixMap[x][y] = true;
        // region.useful++;

        if (region.start[0] > x) {
            region.start[0] = x;
        }
        if (region.start[1] > y) {
            region.start[1] = y;
        }
        if (region.end[0] < x) {
            region.end[0] = x;
        }
        if (region.end[1] < y) {
            region.end[1] = y;
        }

        // - - x
        // - 1 -
        // - - -
        if (!matrixMap[x - 1][y + 1] && matrix[x - 1][y + 1]) {
            findNeighbor([x - 1, y + 1], region);
        }

        // - - -
        // - 1 x
        // - - -
        if (!matrixMap[x][y + 1] && matrix[x][y + 1]) {
            findNeighbor([x, y + 1], region);
        }

        // - - -
        // - 1 -
        // - - x
        if (!matrixMap[x + 1][y + 1] && matrix[x + 1][y + 1]) {
            findNeighbor([x + 1, y + 1], region);
        }

        // - - -
        // - 1 -
        // - x -
        if (!matrixMap[x + 1][y] && matrix[x + 1][y]) {
            findNeighbor([x + 1, y], region);
        }

        // - - -
        // - 1 -
        // x - -
        if (!matrixMap[x + 1][y - 1] && matrix[x + 1][y - 1]) {
            findNeighbor([x + 1, y - 1], region);
        }

        // - - -
        // x 1 -
        // - - -
        if (!matrixMap[x][y - 1] && matrix[x][y - 1]) {
            findNeighbor([x, y - 1], region);
        }

        // x - -
        // - 1 -
        // - - -
        if (!matrixMap[x - 1][y - 1] && matrix[x - 1][y - 1]) {
            findNeighbor([x - 1, y - 1], region);
        }

        // - x -
        // - 1 -
        // - - -
        if (!matrixMap[x - 1][y] && matrix[x - 1][y]) {
            findNeighbor([x - 1, y], region);
        }
    }
}

function getBestSquare() {
    let bestSquare = 0;
    let bestEffect = 0;
    for (let i = 0; i < regions.length; i++) {
        let square = getRegionSquare(regions[i]);
        let effect = getRegionUseful(regions[i]);

        if (square > 1) {
            if (
                bestEffect === 0 ||
                effect / square > bestEffect / bestSquare ||
                (effect / square === bestEffect / bestSquare &&
                    square > bestSquare)
            ) {
                bestSquare = square;
                bestEffect = effect;
            }
        }
    }

    return bestSquare;
}

function getRegionSquare(region) {
    return (
        Math.abs(region.end[0] - region.start[0] + 1) *
        Math.abs(region.end[1] - region.start[1] + 1)
    );
}

function getRegionUseful(region) {
    let result = 0;

    for (let i = region.start[0]; i < region.end[0] + 1; i++) {
        for (let j = region.start[1]; j < region.end[1] + 1; j++) {
            result += matrix[i][j];
            // console.log(`matrix[${i}][${j}] ${matrix[i][j]}`);
        }
    }

    return result;
}

function main() {
    // do zero
    matrix.push(matrix[0].map(() => 0));
    matrix.unshift(matrix[0].map(() => 0));
    matrix.forEach((el, i, arr) => {
        matrix[i].push(0);
        matrix[i].unshift(0);
    });

    matrixMap = matrix.map((row) => row.map(() => false));

    // return getAllRegions();
}

main();
