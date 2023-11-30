// In slice method we have two params
// start-index , endindex+1 ====>(startindex, endindex+1)

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
console.log(fruits.slice(0,1))


let arr=[1,2,3,4,5,6,7]
console.log(arr.slice(1,6))