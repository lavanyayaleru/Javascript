// In map() method we have 3 params,
// value,index,array
// value ===> It will return only elements from an array or object
// index ===> It will return only indexes from an each element from an array or object
// array ===> It will returns total array.
// map()will return an array.

const fruits=["apple","banana","orange","grapes"]
const allfruits=fruits.map((value,index,array)=>{
    return array
    // console.log(value)
    // console.log(index)
    // console.log(array)
})
console.log(allfruits)