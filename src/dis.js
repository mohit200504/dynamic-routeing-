import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { getdata ,addcart} from "./store.js";


import './dis.css';
function Dis(){

  let dispatch=useDispatch()

 

let info=useSelector((state)=>{

    console.log(state)
  return state.items;

})

let [b,ub]=useState(true);



  return (
    
      
     <ul>
     {
      info.map((l)=>{
        let img =l.image;
        return <li>
             <div className="title">
                <h3>{l.title}</h3>
            </div>
            <div className="image">
               <img src={img}></img>
            </div>
            <div className="cost">
                    <h3>{l.price}</h3>


                    <button onClick={()=>{
                        console.log(l)
                        dispatch(addcart(l))
                        }}>cart</button>
            </div>
            
            </li>
      })
     }
     </ul>
    
    
    
    )}
export default Dis;
