const findTheOldest = function(people) {
    let sorted = people.sort((a, b) => {
        if(!a.yearOfDeath) {
            aFactor = (new Date()).getFullYear();
        } else {
            aFactor = a.yearOfDeath;
        }

        if(!b.yearOfDeath) {
            bFactor = (new Date()).getFullYear();
        } else {
            bFactor = b.yearOfDeath;
        }

        let aAge = aFactor - a.yearOfBirth;
        let bAge = bFactor - b.yearOfBirth;

        if(aAge > bAge){
            return -1;
        } else {
            return 1;
        }
    })

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
