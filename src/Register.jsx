 import React, {useState} from "react";

 export const Register =(props)=>{
    const[email, setEmail ]= useState('');
    const[pass,setPass]= useState('');
    const [name,setName] = useState('');

    const handleSubmit= (e)=>{
        //Prevent Default reload
        e.preventDefault();
        console.log(email);
    }

    return (



     <div className="auth-form-container"> 
                <h2>Register</h2>
                <form className="register-form"  onSubmit={handleSubmit}>
                    <label htmlFor>Name</label>
                    <input value={name} type ="text" id="name" placeholder="Name"/>
                    <label htmlfor ="email">Email</label>
                    <input value={email} onchange={(e)=> setEmail(e.target.value)} type="email" placeholder ="Email" id="email" name="email"/>
                    <label htmlfor ="password">Password</label>
                    <input value= {pass} onchange={(e)=> setPass(e.target.value)} type="password" placeholder ="Password" id="password" name="password"/>
                    <button type="submit">Log In</button>
                </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account ? login herr</button>
    
        </div>
    )
 }