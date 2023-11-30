// Before template literals to combine the strings we are using concat() Method so to overcome this we are using now template literals.
// denoted by (` `)backticks, using dollars followed by curlybraces ${} we can easily insert a variables or expressions into the backticks.
// also, it will support Multiple line strings.
// these 2 are doing the same job so in this case we are using the templateliterals.

// using concat():

let string1 = "Lalli"
let string2 = "Hello"
console.log(string1.concat(string2))

// using Templateliterals:

const string3 = "Lalli"
const string4 = `${string3}Hello`
console.log(string4)