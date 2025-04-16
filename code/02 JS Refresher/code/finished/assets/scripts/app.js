const userNameData = ["John", "Doe", "Smith"];

const [firstName, lastName, middleName] = userNameData;

console.log(firstName, lastName, middleName);

const person = {
  name: "John",
  age: 30,
};

const { name: userName, age: userAge } = person;

console.log(userName, userAge);

const oneList = ["Sports", "Cooking"];
const twoList = ["Reading", "Programming"];

const combinedLists = [...oneList, ...twoList];

console.log(combinedLists);

const newPerson = { ...person };

console.log(newPerson);


