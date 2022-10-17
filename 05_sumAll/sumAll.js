const sumAll = (a, b) => {
    let total = 0;
    if ((typeof a != "number") || (typeof b != "number")) {
        total = "ERROR";
    } else {
        if ((a < 0)||(b < 0)) {
            total = "ERROR";
        } else {
            if (a < b) {
                for (let i = a; i <= b; i++) {
                    total += i;
                }
            } else {
                for (let i = b; i <= a; i++) {
                    total += i;
                }
            }
        }
    }
    
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
