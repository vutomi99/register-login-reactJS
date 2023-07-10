//For capturing
import React,{useState} from "react";

export const Login =(props)=>{
    const[email, setEmail ]= useState('');
    const[pass,setPass]= useState('');

    const handleSubmit= (e)=>{
        //Prevent Default reload
        e.preventDefault();
        console.log(email);
    }

    return (
     <div className="auth-form-container">
        <h2>Login</h2>
       <form className="login-form" onSubmit={handleSubmit}>
            <label htmlfor  ="email">Email</label>
            <input value={email} onchange={(e)=> setEmail(e.target.value)} type="email" placeholder ="Email" id="email" name="email"/>
            <label htmlfor ="password">Password</label>
            <input value= {pass} onchange={(e)=> setPass(e.target.value)} type="password" placeholder ="Password" id="password" name="password"/>
            <button type="submit">Log In</button>
       </form>

       <button className="link-btn" onClick ={() =>props.onFormSwitch('register')}>Can't log in? Register here</button>

     </div>
    )
 }