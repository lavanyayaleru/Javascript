// axios==> to create Http requests in our webpage,whether we need to make a simple get request,post request,put request,delete request.
// async==> it's always used in before function keyword,used to create asynchronous function
// await==> it will wait untill the response comes from the API
// try&catch==>both are used for error handlings
// catch==>catch block allowyou  for execute the code, whether if an error occurs in the try block.

const axios=require ("axios")
async function functionname(){
    try{
const result=await axios.get("http://localhost:3000/students");
console.log(result.data)
    }
    catch(error){
  console.log("error")
    }
}
functionname()



