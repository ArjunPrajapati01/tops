export const applyDiscount=(code)=>{

return async(dispatch)=>{

await new Promise(

resolve=>setTimeout(resolve,1000)

);

alert(

"Discount Applied : "+code

);

};

};