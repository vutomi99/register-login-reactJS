import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  //function to store current form
    const [currentForm , setCurrentForm] = useState('login');

    const toggleForm =(formName)=>{
      setCurrentForm(formName);
    }

  return (

    <div className="App">
      {
        // Ternary oprator to determine the form to display

        currentForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register />
      }

    </div>
  );
}

export default App;
