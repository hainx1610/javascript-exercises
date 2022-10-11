const reverseString = (inputString) => {
    let reverseString = "";
    for (let i = inputString.length; i >0; i--) {
        reverseString += inputString[i - 1];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
