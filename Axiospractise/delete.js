const axios=require ("axios")
async function functionname(){
    try{
const result=await axios.delete("http://localhost:3000/students/65685890d071af1d4acd3af7");
console.log(result.data)
    }
    catch(error){
  console.log("error")
    }
}
functionname()