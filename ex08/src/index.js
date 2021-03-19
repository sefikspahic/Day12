var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Swift", "R"],
  },
  {
    firstName: "Richard ",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  //Only change code below this line

  var arr = contacts.filter((contact) => contact.firstName === name);

  if (arr.length > 0) {
    if (arr[0].hasOwnProperty(prop)) {
      return arr[0][prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }

  // Only change code above this line
}
console.log(lookUpProfile("John", "likes")); // Change this line
console.log(lookUpProfile("Jane", "lastName")); // Change this line
console.log(lookUpProfile("Richard ", "likes")); // Change this line
console.log(lookUpProfile("Rob", "number")); // Change this line
console.log(lookUpProfile("Rob", "JavaScript")); // Change this line
console.log(lookUpProfile("John", "address")); // Change this line
module.exports = lookUpProfile;
