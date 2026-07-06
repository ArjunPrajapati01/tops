import { useState } from "react";

import {
createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import Navbar from "../components/Navbar";

export default function Signup(){

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const signup=async()=>{

await createUserWithEmailAndPassword(

auth,

email,

password

);

alert("Signup Successful");

};

return(

<>

<Navbar/>

<div className="container">

<h1>Signup</h1>

<input

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>

<br/><br/>

<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>

<br/><br/>

<button onClick={signup}>

Create Account

</button>

</div>

</>

);

}