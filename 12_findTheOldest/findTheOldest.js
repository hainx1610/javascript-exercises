const findTheOldest = function(list) {
    const sorted = getAgeList(list).sort((a, b) => a.age > b.age ? -1 : 1);
    return sorted[0];
}

const getAgeList = list => {
    const array = [];
    for (const person of list) {
        let age = 0;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        array.push({
            name: person.name,
            age: age
        });
    };
    return array;
}

// Do not edit below this line
module.exports = findTheOldest;
