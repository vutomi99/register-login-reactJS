//For capturing
import React,{useState} from "react";

export const Login =()=>{
    const[email, setEmail ]= useState('');
    const[pass,setPass]= useState('');

    const handleSubmit= (e)=>{
        //Prevent Default reload
        e.preventDefault();
        console.log(email);
    }

    return (
     <>
       <form onSubmit={handleSubmit}>
            <label for ="email">Email</label>
            <input value={email} onchange={(e)=> setEmail(e.target.value)} type="email"placeholder ="Email" id="email" name="email"/>
            <label for ="password">Password</label>
            <input value= {pass} onchange={(e)=> setPass(e.target.value)} type="password"placeholder ="Password" id="password" name="password"/>
            <button type="submit">Log In</button>
       </form>

       <button>Can't log in? Register herr</button>

     </>
    )
 }