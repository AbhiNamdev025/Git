let obj = {
  name: "Abhi",
  class: "BCA",
  age: 19,
};

console.log(obj);
obj.class = "MCA";
console.log(obj);
// console.log(obj["name"]);

// let json = `{
//   "name" : "Abhi","class": "BCA","age": 19
// }`;

// let newObj = JSON.parse(json);
// console.log(newObj);
// console.log(newObj.age);

// let newObj2 = JSON.stringify(json);
// console.log(newObj2);

const mixedArray = [42, "hello", true, null, { name: "Abhi" }, [1, 2, 3]];
console.log(mixedArray);
