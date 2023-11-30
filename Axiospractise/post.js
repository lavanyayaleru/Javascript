const axios=require ("axios")
async function functionname(){
    try{
const result=await axios.post("http://localhost:3000/students",{
        "studentName": "Prema",
        "fatherName": "Premafather",
        "motherName": "Premamother",
})
console.log(result.data)
    }
    catch(error){
  console.log("error")
    }
}
functionname()