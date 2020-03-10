// Advanced Arrays

var array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});

console.log("forEach", double);

// map, filter, reduce
// critical difference.. if you want to do a loop...want to do a map..forEach only cares to iterate over a collection of elements and apply whatever operation we want to, to the elements. with map you always have a return value. map transforms the array. creates a new array versus forEach which just does a whole bunch of actions and they are not limited. whole ton of side effects with forEach... can return undefined... versus with map all the side effects are theoretically gone and have to return the expression/what is in the block? created a pure function. no question whether we return or not. want to keep things acting in an expected way. we want to write pure simple functions. array stays the same. never mutate the data, just create a new array. whenever you have a single paramater you can get rid of the parenthesis and do shorthand one liner.

const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// filter

const filterArray = array.filter(num => num > 5);
// const filterArray = array.filter(num => num === 5);
// can put any condition you want. if true it will go into the array otherwise it won't!

console.log("filter", filterArray);
//reduce

const reduceArray = array.reduce((accumulator, num) => accumulator + num, 0);

console.log("reduce", reduceArray);

// accumulator will remember what was there previously
// in reduce after the function you have a second paramter
