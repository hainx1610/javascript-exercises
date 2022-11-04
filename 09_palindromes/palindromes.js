// ez way but kinda language-dependent 
// const palindromes = function (str) {
//     let processedStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
//     return processedStr == processedStr.split("").reverse().join("");
// };

//or use loop/half-indexing
const palindromes = function (str) {
    let processedStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ""); //use regex to remove spaces and commas
    let strLength = processedStr.length;
    for (let i = 0; i < strLength/2; i++) {
        if (processedStr[i] !== processedStr[strLength - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
