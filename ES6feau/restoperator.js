// Main purpose of restoperator  is it's gather's multiple functional arguments into an array.
// also it is used in a function params which is used to collect rest arguments in to an array.
// we can use this restoperator in the code when we dealing with the functions that can take varaible number of arguments.
// also we can use the arrow functions in a rest operator
// if we use both rest and individual params into the function, 
// we must get the output as individual params comes before the restoperator,afterwards it collects the rest arguments.

// without using Rest-operator:
function add(a,b,c){
    console.log(a,b,c)
}
add(1,2,3)

// using rest-operator but not using restoperator in an console:
function sub(a,b,...restparams){
    console.log(a,b,restparams)
}
sub(1,2,3,4,5,6,7,8,9)


//  using rest-operator in console:
function sub(a,b,...restparams){
    console.log(a,b,...restparams)
}
sub(1,2,3,4,5,6,7,8,9)
