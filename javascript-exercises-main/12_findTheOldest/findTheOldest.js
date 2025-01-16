const findTheOldest = function(peopleArr) {
  if (peopleArr.length == 0) {
    return {};
  }
  return peopleArr.reduce(keepOldest, peopleArr[0]);
};

function keepOldest(oldest, curr) {
  if (getAge(oldest) >= getAge(curr)) {
    return oldest;
  } else {
    return curr;
  }
}

function getAge(person) {
  let currentYear = (new Date()).getFullYear();
  let personBorn = "yearOfBirth" in person ? person.yearOfBirth : currentYear;
  let personEnd = "yearOfDeath" in person ? person.yearOfDeath : currentYear;
  return personEnd - personBorn;
}

// Do not edit below this line
module.exports = findTheOldest;
