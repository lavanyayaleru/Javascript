// object has key,value pairs
// keys have strings,value has any datatypes like, string, numbers, boolean, null, undefined.
// {key:value}
// key doesn't change,but value may change

const product={
    name:"bottle",
    price:100,
    color:"blue",
    isbottle:true

}
console.log(product)
console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))
