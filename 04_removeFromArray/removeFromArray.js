const removeFromArray = (array, ...theArgs) => {
    for (const arg of theArgs) {
        for (const element of array) {
            if (arg === element) {
                array.splice(array.indexOf(element), 1);
            }
        }
    }
    
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
