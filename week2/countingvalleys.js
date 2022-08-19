function countingValleys(steps, path) {
    let undersea = false;
    let point = 0;
    let altChange = 0;
    const takenPath = path.split('');

    takenPath.map((steps) => {
        if (steps === 'D') point--;
        else point++;

        if (point > 0) undersea = false;
        else if (point < 0) undersea = true;

        if (point == 0 && undersea) {
            altChange++;
        }
    })

    return altChange;
}