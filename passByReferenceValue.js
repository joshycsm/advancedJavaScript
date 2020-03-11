// pass by value, creates a new memory state for the new variable
var a = 5;
var b = a;

b++;

// pass by reference
// save memory loading from one reference
let obj1 = { name: "Yao", password: "123" };
obj2 = obj1;

obj2.password = "easypeasy";

console.log(obj1);
console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(1234334);
console.log(d);
// because arrays are objects and pass by reference it will change c too. however there are times where we want to clone an object.
var d = [].concat(c);
// objects are a little more difficult

let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };

// this clones the obj so it is not pass by reference result
obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);

// what happens if we have an object inside an object

let obj = { a: "a", b: "b", c: { deep: "try and copy me" } };
obj.c.deep = "hahah";

// each object gets passed by reference... even tho u cloned.. this is called a shallow clone.. cloned the first level. but within the object there was an address to another object. and that address was not changed.. you are only cloning the first layer. how to do deep cloning? use json! superClonne did a deep clone. be careful can be performance issues if cloning a deeply nested object using JSON.parse(JSON.stringify(obj))

let superClone = JSON.parse(JSON.stringify(obj));
console.log(superClone);

// Type Coercion
// when you have a number and string, javascript engine will convert the string to the number for example so they are equal.
// converting one type to another type.
// do all languages have type coercion? YES
// javascript has extra heavy type coercion because it is dynamically typed.
// double equal compare the two values and if they are different types try to coerce one to another.
// three equals means be explicit, dont try to coerce the type so they will match.
// javascipt coerce 1 to equal true and actually coerce 0 to equal false!!!

1 == "1"; // true

if (1) {
  console.log(5);
}
