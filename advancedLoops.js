// Advanced Loops

const basket = ["apples", "oranges", "grapes"];

// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// 2
basket.forEach(item => {
  console.log(item);
});

// skipping while loop and do while loop, we should already understand how to do this

// for of Loop, new specification of es6 (new feature)
// key term here. iterating over this array
// Iterating simply means we are able to go one by one through an item like a basket and look at the items
// iterating able to be done in javascript on iterables. hey you can iterate over this thing, in js you can iterate over arrays, string, etc.
for (item of basket) {
  console.log(item);
}
for (item of "basket") {
  console.log(item);
}

// for in Loop
// works with objects!!!
// for in - properties, allows us to loop in to check the objects properties... we are not iterating here.. with an object in js we are doing something called enumerating.
// an object in javascript is enumerable if it allows us to see the properties of the objects. so enumerating is for objects.
// cannot for of loop because it must iterable.
// enumerating - objects

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

basket = {
  0: "apples",
  1: "oranges",
  2: "grapes"
};

for (item in detailedBasket) {
  console.log(item);
}

// good to really understand the difference of using a for in loop.
// for of loop
// for in loop!
// a for in loop loops over enumerable properties and enumerable property names of an object.
// a for of loop for array and strings.
