// Before ternary operator to check the conditions we are using the conditional operators in this operators we will use if,else-if & else
// so in every code we have to check this three conditions based on our requirements ,By using ternary operator we will write the code in a single line
// by using this   condition ? Expressiontrue : Expressionfalse; 

// using conditionaloperator:

let age=20;
if(age>=18){
    console.log("is eligible for vote")
}
else{
    console.log("not eligible")
}


// using ternaryoperator:

let ages=20
let isadult=(ages>=18) ? "is eligible for vote" : "not eligible"
console.log(isadult)
