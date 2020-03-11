// only two features added in es7 so easy

.includes()

// true
"Hellooo".includes("o")

const pets = ['cat', 'dog', 'bat']

pets.includes('dog') // true

pets.includes('bear') //false

const square = (x) => x**2

square(2) // 4
square(5) // 25

const cube = (y) => y**3

cube(3) // 27
cube(4) // 64

// ES8 ES2017 most important features

// string padding! just another string method

.padStart()
.padEnd()
// 10 spaces inclucing the string!
"Turtle".padStart(10)

// trailing commas in functions, parameter lists and calls; syntactic detail really and won't give out an error

const fun = (a,b,c,d,) => {
    console.log(a)
}

fun(1,2,3,4,)

// 

Object.values
Object.entries
Object.keys
// can't map filter or reduce since this is not an array, but sometimes we skill want to iterate over them when they are objects
let obj = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr. Grinch"
}

// will make it an array except with properties and values.
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})

// but with object.entries it's easier..
Object.values(obj).forEach(value => {
    console.log(value)
})
// for entries.
Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})

// major es8 feature!!! Async Await


// ES10 ES2019


// more useful with nested arrays..
const array = [1,2,3,4,5]
array.flat(1)
const array2 = [1,[2,3],[4,5]]
array2.flat(1)
const array3 = [1,2,[3,4,[5]]]
array3.flat(2)

const entries = ['bob', 'sally',,,,,'cindy']
entries.flat()

// can use flat functon and map method on an array!!!
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "trex")

userEmail = '     eddytheeagle@gamil.com'
useremail2 = 'jonnydangerous@gmail.com     '
console.log(userEmail.trimStart())
console.log(useremail2.trimEnd())

// transforms a list of key value pairs into an object!
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

const obj = Object.fromEntries(userProfiles)
// allowed us to do the exact opposite thing....
Object.entries(obj)

try {
  bob + 'hi' // true + "hi" // 4 + 5
} catch (error) {
  console.log('you messed up' + error)
}