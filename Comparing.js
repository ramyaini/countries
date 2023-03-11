let ob1 = {name: "person1", age: 5};
let ob2 = {age: 5, name: "person1"};

if (JSON.stringify(ob1) === JSON.stringify(ob2)) {
  console.log("The objects are equal!");
} else {
  console.log("The objects are not equal!");
}
