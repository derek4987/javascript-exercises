// const findTheOldest = function(array) {
//     const ordered = array.sort((a, b) => a.yearOfBirth < b.yearOfBirth ? 1 : -1);
//     return ordered[2];
//     const oldest = ordered.map(person => ordered.name);
//     return oldest[0];
// };

// solution from solutions branch
const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
