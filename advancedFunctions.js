function first() {
  var greet = "hi";
  function second() {
    console.log(greet);
  }
  return second;
}

var newFunc = first();
newFunc();

const first = () => {
  const greet = "hi";
  const second = () => console.log(greet);
  return second;
};

const newFunc = first();
newFunc();

//Closures
// What closures does is the child scope has access to the parent scope!!
// Children always have access to their parent scope but parent scope never have access to their children.
// Closures - just saying.. a function ran, the function executed. It's never going to be ran again.
// BUT it's going to remember that there are references to those variables

// Currying
// The process of converting a function that takes in multiple arguments into a function that takes them one at a time
// Why? because now it's more extensible

const muiltply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
// curriedMultiply(3);
const muitiplyBy5 = curriedMultiply(5);

// Compose
// The act of putting two functions together to form a third function where the output of one function is the input of the other.

const compose = (f, g) => a => f(g(a));

const sum = num => num + 1;

compose(sum, sum)(5);

// Avoiding Side Effects, functional purity

// an input is something we might give to a function input... then we have the function which has it's own scope... it is in it's own universe, it can have console.log() it can do a buncy of stuff... and then we have a return, am i returning anything? you can return a value or undefined!

// side effects are any actions that happen inside of the function that we don't really know anything about. if it console.log() or reads an outside variable etc.... it can create a side effect so try to avoid side effects which results in functional purtiy!

// avoid side effects always want a return so console.log() and undefined are gone and always return a value/something.
// By avoiding side effects and always returning, we create something that we call deterministic.
// it means, no matter what.. if my inputs go thru a function my return value is always the same. whatever we put in the parameters we put through into our inputs the function always returns the same value. that's determinism and avoids bugs in our code. prevents errors in our code. code base may have side effects but it's really good practice to be a top performing developer to write code that minimize side effects and has functional purity so it is more than less deterministic.

var a = 1;
function b() {
  a = 2;
}
