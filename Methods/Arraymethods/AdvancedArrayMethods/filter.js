// In filter() method we have 3 params,
// value,index,array
// value ===> It will return only elements from an array or object
// index ===> It will return only indexes from an each element from an array or object
// array ===> It will returns total array.
// filter()will return an array.
// it will checks the condition based on the condition if condition is true, that particular value will return.

const animals=["tiger","lion","deer"]
const allanimals=animals.filter((value,index,array)=>{

    return array
    // console.log(value)
    // console.log(index)
    // console.log(array)
})
console.log(animals)