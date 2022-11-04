const fibonacci = function(n) {
    let t = +n; // to accept strings as parameters
    let sequence = [1, 1];
    let result;
    if (t === 1) {
        result = 1;
    } else if (t === 2) {
        result = 1;
    } else if (t > 2) {
        for (let i = 3; i <= t; i++) {
            let value = sequence[i - 3] + sequence[i - 2]; // index = t - 1
            sequence.push(value);
        }
        result = sequence[t - 1];
    } else {
        result = "OOPS";
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
