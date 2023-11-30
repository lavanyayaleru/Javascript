// In this splice method we have 3 params
// (startIndex, how many elements has to remove, how many elements has to add)

let fruits=[{
    fruitsname:"oranges",
    price:500,
    color:"orange",
},{
    namefruits:"apples",
    rate:600,
    isvegetable:false
},{
    fruit:"mangoes",
    dollars:7,
    colors:"yellow"
}]

fruits.splice(1,1,{fruitname:"banana",prices:"12dozens"})
console.log(fruits)

const arr=[1,2,3,4,5,6,7]
arr.splice(1,1,"numbers")
console.log(arr)