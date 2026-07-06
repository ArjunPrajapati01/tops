import { useState } from "react";

import {
signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/firebase";

import Navbar from "../components/Navbar";

export default function Login(){

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const login=async()=>{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("Login Successful");

};

return(

<>

<Navbar/>

<div className="container">

<h1>Login</h1>

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

<button onClick={login}>

Login

</button>

</div>

</>

);

}