import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { deletecart } from "./store.js";

import './cart.css';
import './dis.css';
function Cart({ucart}){

  let dispatch=useDispatch()

 
let info=useSelector((state)=>{

    ucart(state.cart.length)

    return state.cart;

})






  return (
    
      <div>
        

         <ul id="u">
         <h1>Your cart </h1>

         {
    info.map((c)=>{

        let im=c.image;
        
        return <li id="l">

            
            <div className="cardimage">
                 <img id="imm" src={im}/>
             </div>
             <div className="cardtitle">

                <h2>{c.title}</h2>

             </div>
             <div className="cardprice">
             <h4>RS {c.price}</h4>
             <button id="r" onClick={()=>{
                console.log(c.id)
                dispatch(deletecart(c.id))
             }}>remove</button>

             </div>
             </li>
    })
   }


         </ul>


      </div>
   
     
    
    )

}
export default Cart;
