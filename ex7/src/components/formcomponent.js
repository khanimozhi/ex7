import React,{useState} from "react";
import style from "./formcomponent.css";
function Formcomponent(){
const[fullname,setfullname]=useState("");
const[email,setemail]=useState("")
const[phone,setphone]=useState("")
 const[password,setpassword]=useState("")
 const[conpassword,setconpassword]=useState("")
 const[photo,setphoto]=useState("")
  const[updatefullname,setupdatefullname]=useState("false")
  const[updateemail,setupdateemail]=useState("false")
  const[updatephone,setupdatephone]=useState("false")
  const[updatepassword,setupdatepassword]=useState("false")
   const[updateconpassword,setupdateconpassword]=useState("false")
   function formvalidator(event)
   {
    event.preventDefault()
    console.log("form validation");
    if(fullname==="")
    {
     setupdatefullname(true)   
     }
     if(email==="")
    {
     setupdateemail(true)   
     }
     if(phone.length !== 10)
     {
     setupdatephone(true)   
     }
      if(password==="")
      {
      setupdatepassword(true)   
      }
      if(conpassword !== password)
      {
       setupdateconpassword(true)      
      }
    }
return(
    <>
    <div className={style.form}>
      <form>
      <table>
      <tr>
      <td>Name:</td><td><input type="text" placeholder="Enter your name" value={fullname} onChange={(event)=>setfullname(event.target.value)}></input>
       {updatefullname === true && <p style={{color:'red',fontFamily:'timesnewroman',fontSize:'15px'}}> *please enter your name</p>}</td></tr>
        <br/><br/>
        <tr><td>Email:</td><td><input type="text" placeholder="Enter your email" value={email} onChange={(event)=>setemail(event.target.value)}></input>
        {updateemail === true && <p style={{color:'red',fontFamily:'timesnewroman',fontSize:'15px'}}> *please enter your email</p>}</td></tr>
        <br/><br/>
        <tr><td>Phone number:</td><td><input type="text" placeholder="Enter your phon
enumber" value={phone} onChange={(event)=>setphone(event.target.value)}></input>
        {updatephone === true && <p style={{color:'red',fontFamily:'timesnewroman',fontSize:'15px'}}> *phone number should be 10 digits</p>}</td></tr>
        <br/><br/>
        <tr><td>Password:</td><td><input type="password" placeholder="Enter your password" value={password} onChange={(event)=>setpassword(event.target.value)}></input>
        {updatepassword === true && <p style={{color:'red',fontFamily:'timesnewroman',fontSize:'15px'}}> *please enter your password</p>}</td></tr>
        <br/><br/>
        <tr><td>Confirm password:</td><td><input type="password" placeholder="Enter your confirm password" value={conpassword} onChange={(event)=>setconpassword(event.target.value)}></input>
        {updateconpassword === true && <p style={{color:'red',fontFamily:'timesnewroman',fontSize:'15px'}}> *please enter correct password</p>}</td></tr>
        <br/>
        <tr><td>Photo:</td><td><input type="file" value={photo} onChange={(event)=>setphoto(event.target.value)}></input></td></tr>
        <br/>
        <tr><td></td><td><button type="submit" onClick={formvalidator}>Signup</button></td></tr>
        </table>
        </form>
       
 </div>
    </>
    )
 } 
 export default Formcomponent;    
