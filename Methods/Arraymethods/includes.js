// this mehod will checks the elemets whether the element is there are not in an array
// return type of include is boolean
// In objects includes are not acceptable we cannot use includes in objects.

let object=[{
    name:"babydoll",
    age:"5years",
    class:10
}]
console.log(object.includes({name:"babydoll", age:"5years",class:10}))


let colors=["yellow","orange","green"]
console.log(colors.includes("orange"))