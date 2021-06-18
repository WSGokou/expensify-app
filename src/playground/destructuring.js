//
// Object
//

// const person = {
//   name: "Will",
//   age: 23,

//   location: {
//     city: "Canterbury",
//     temp: 29,
//   },
// };

// const { name: firstName = "Anon", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

// const address = ["101 St Martins", "Canterbury", "Kent", "CT1"];
// const [, city, county = "Essex"] = address;
// console.log(`You are in ${city} ${county}`);

const item = ["Coffee (iced)", "£2.00", "£2.50", "£2.75"];
const [itemName, , mPrice, lPrice] = item;
console.log(`A medium ${itemName} costs ${lPrice}`);
