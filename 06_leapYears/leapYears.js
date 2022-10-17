const leapYears = (year) => {
    let result;
    if (year % 4 === 0) {
        if ((year % 100 === 0) && (year % 400 !== 0)) {
            result = false;
        } else {
            result = true;
        }
    } else {
        result = false;
    };
    return result;
}

// Do not edit below this line
module.exports = leapYears;
