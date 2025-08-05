const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        function age(person) {
            if (!"yearOfDeath" in person) {
                const currentYear = new Date().getFullYear();
                return currentYear - person.yearOfBirth;
            } else {
                return person.yearOfDeath - person.yearOfBirth;
            }
        }
        return ((age(personB) - age(personA)));
    });
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
