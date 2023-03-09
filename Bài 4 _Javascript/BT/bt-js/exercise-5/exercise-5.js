function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // Coding here
    return submittedUsers.every((submittedUsers) => {
      return goodUsers.some((goodUsers) => {
        return submittedUsers.id === goodUsers.id;
      })
    })
  }
}

var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);

console.log(testAllValid([{ id: 2 }, { id: 1 }]));
// => true

console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));

