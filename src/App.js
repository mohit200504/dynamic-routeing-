import Dis from './dis.js';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Cart from './cart.js';
import './App.css';
import { useState } from 'react';
function App(){

  let [cart,ucart]=useState(0)

  return (
    <div>

      <Router>
         <div className='head'>
         
            <Link to="/home"><button id="b">home </button></Link>
             <Link to="/cart"> <button id="b">cart <span>{cart}</span></button></Link>
          
         </div>
        
        

      <Routes>
           <Route  path="/cart" element={<Cart ucart={ucart}/>}/>
           <Route  path="/home" element={<Dis/>}/>

           
      </Routes>

      </Router>
     
    </div>
  )
}

export default App;
