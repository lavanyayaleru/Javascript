const axios=require ("axios")
async function functionname(){
    try{
const result=await axios.put("http://localhost:3000/students/656856cad071af1d4acd3af0",{
  "studentName": "Maggie",
  "fatherName": "Maggiefather",
  "motherName": "Maggiemother",

});
console.log(result.data)
    }
    catch(error){
  console.log("error")
    }
}
functionname()