// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

function testLevel() {
  if (experience > 90) {
    let wizardLevel = true;
    return wizardLevel;
  }
}

testLevel();

// Destructuring
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
};

const { player, experience } = obj;
let { wizardLevel } = obj;

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// Another cool thing we can do with objects

// This is very useful if we need to calculate something for the property value...hmm.
const name = "john snow";

const obj = {
  [name]: "hello",
  [1 + 2]: "hihi"
};

const a = "simon";
const b = true;
const c = {};
// when property and value is the same don't have to worry about declaring key and value. just key will show value.

const obj1 = {
  a: a,
  b: b,
  c: c
};

const name1 = "sally";
const age = 34;
const pet = "horse";
const greeting = "Hello " + name + " you seem to be doing " + greeting;

//template strings.!

const grettingBest = `Hello ${name1} you seem to be ${age -
  10}. What a lovely ${pet} your have`;

// default arguments

function greet(name1 = "", age = 30, pet = "cat") {
  return `Hello ${name1} you seem to be ${age -
    10}. What a lovely ${pet} your have`;
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// arrow functions, this will help to write better/cleaner code!

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

// a function expression that accepts a parameter. but with arrow function if single return right a one liner and assumes you want to return what is after the arrow function!
const add3 = (a, b) => {
  return a + b;
};
