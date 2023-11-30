// In forEach method we have 3 params,
// value,index,array
// value ===> It will return only elements from an array or object
// index ===> It will return only indexes from an each element from an array or object
// array ===> It will returns total array.
// forEach()will not return an array.

const arr=["elephant","orange","sunflower"]
// console.log(arr)

const arr2=arr.forEach((value,index,array)=>{
    // console.log(value)
    // console.log(index)
    console.log(array)
})




