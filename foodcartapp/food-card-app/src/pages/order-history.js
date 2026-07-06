import {

collection,

onSnapshot

} from "firebase/firestore";

import {

useEffect,

useState

} from "react";

import { db } from "../firebase/firebase";

import Navbar from "../components/Navbar";

export default function OrderHistory(){

const[orders,setOrders]=

useState([]);

useEffect(()=>{

const unsub=onSnapshot(

collection(db,"orders"),

(snapshot)=>{

setOrders(

snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}))

);

}

);

return()=>unsub();

},[]);

return(

<>

<Navbar/>

<div className="container">

<h1>Order History</h1>

{

orders.map(order=>(

<div

className="card"

key={order.id}

>

<h3>

{order.customerName}

</h3>

<p>

{order.itemOrdered}

</p>

<p>

Qty : {order.quantity}

</p>

</div>

))

}

</div>

</>

);

}