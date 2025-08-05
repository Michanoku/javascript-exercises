const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        return (personA.yearOfDeath - personA.yearOfBirth) - (personB.yearOfDeath - personB.yearOfBirth);
    });
};

// Do not edit below this line
module.exports = findTheOldest;
