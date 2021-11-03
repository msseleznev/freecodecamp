// Setup
function abTest(a, b) {
    if (a >= 0 && b >= 0) {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    } else {
        return undefined;
    }


}

abTest(2, 2);