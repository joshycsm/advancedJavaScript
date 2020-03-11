// reference type
// objects are what is called reference types in javascript..
// number null boolean undefined string are all primitive types.. we tell them what they are..
// non-primative type is an object.. defined by the programmer.. objects are reference types...
// so object3 is a new object with a new value. we are saying object1 contains box 1 but object2 is whatever is in object1 which happens to reference the same box 1. but object3 creates a new object that has a new value of box3, we change the content of box 1 when we do object1.value = 15.
// same with arrays... arrays are just objects at the end of the day. creating a box/datastructure and creating another data structure.

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope
// scope is created when we see curly brackets..

function b() {
  let a = 4;
}

console.log(a); // will return a reference error. a is only in the scope of the function.
console.log(this); // this is the window object. if console.log(this === window) will get true. can access this.alert("hello"), so what this means is, what is the object environment that we are in right now. what is to the left of the dot...so can do alert because i am inside the window object. so doing window.alert or this .alert is the same. this refers to what object it is inside of!!!!

function a() {
  console.log(this);
}
a();
window.a();

// special !!!! important!!! here this is the object which is object4!!!!! very important for when we do instantiation.
const object4 = {
  a: function() {
    console.log(this);
  }
};

// instantiation
// when you make a copy of an object and reuse the code!!!!
// make instances or multiple copies of an object!

// if i ever want to make a copy of an object good to do this below:
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

// Classical Inheritance

// var Player = function(name, type) {
//   this.name = name;
//   this.type = type;
// };

// Player.prototype.introduce = function() {
//   console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// };

// var wizard1 = new Player("Shelly", "healer");
// var wizard2 = new Player("Shawn", "dark magic");

// wizard1.play = function() {
//   console.log(`I'm a ${this.type}`);
// };
// wizard2.play = function() {
//   console.log(`I'm a ${this.type}`);
// };
