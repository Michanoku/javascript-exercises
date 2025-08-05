const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        function age(person) {
            if ("yearOfDeath" in person) {
                return person.yearOfDeath - person.yearOfBirth;
            } else {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                return currentYear - person.yearOfBirth;
            }
        }
        return ((age(personB) - age(personA)));
    });
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
