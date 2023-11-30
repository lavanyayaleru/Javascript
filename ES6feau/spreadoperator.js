// spread operator is used to spread all elemets into an single array 
// spread operator can't spread the objects into an array.

// using spreadoperator: in 1 scenario

let arr=[1,2,4,5,6,9]
let arr2=["lavanya","lalli","orange"]
let arr3=[...arr,...arr2,"custard-apple"]
console.log(arr3)

// using spreadoperator: in 2 scenario

let flowers={
    name:"sunflower",
    price: 20,
    color:"yellow",
    isfruit:false
}
let animals=["lion","peacock","parrot","tiger"]
let FA=[flowers,...animals]
console.log(FA)