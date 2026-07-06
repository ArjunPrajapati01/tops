import { useSelector } from "react-redux";

export default function Cart(){

const items=useSelector(

state=>state.cart.items

);

return(

<div className="card">

<h2>Cart</h2>

{

items.map(item=>(

<p key={item.id}>

{item.name}

</p>

))

}

</div>

);

}