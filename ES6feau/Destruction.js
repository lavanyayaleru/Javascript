// It's a new ES6 feature.
// which means it will extracting the Keys from Object & Indexes from array.

// extracting the keys from Object:

const product={
    name:"Bucket",
    price:700,
    color:"green",
    isBucket:true
}
const{name,price,color,isBucket}=product
console.log(name,price,color,isBucket)

// extracting indexes from array

let arr=[1,2,3,4,5,"lavanya",{person:"banthipuvu"}]
let[apple,banana,cat,rat,dog,elephant,lion,tiger]=arr
console.log(tiger)