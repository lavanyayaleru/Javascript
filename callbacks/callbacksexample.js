// We are sending a function name into another function name as a parameter
// after completeion of task we can see the acknowledgement in such cases we are suing the callbacks

function a(){
 console.log("sending a f.n into a.f.n as a parameter")
}
function b(){
    setTimeout(()=>{
        a(b)
    },3000)

}
b(a)

// setTimeout()
    // in setTime out we have 2 parameteres 
    // one is callback function the anotherone is delaying the time.
    // so based the time delay, the first parameter will call

setTimeout(()=>{a(b)},3000)
    
