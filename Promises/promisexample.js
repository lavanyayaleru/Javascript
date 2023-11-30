// Promise is a javascript object 
// It has 3 states
// 1.Pendingstate
// 2.Resolved state
// 3.Rejected state
// In any asynchronous Programs we can use the promises

const promise=new Promise((Res,Rej)=>{
    Res("success")
})
promise.then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.log(value)
})