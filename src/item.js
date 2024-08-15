
import React from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './item.css';

function Item(){

    let {id}=useParams();
    

    let inffo =useSelector((s)=>{
        return s.items;
    })
           console.log(inffo)

    let item =inffo.filter((l)=>{return parseInt(id) === l.id})
    console.log(item)
    
    let noitem =inffo.filter((l)=>{return parseInt(id) !== l.id})
    
    let i=item.image;

let nav=useNavigate();

    function Change(id){
  
        let i=id;
           return nav(`/id/${i}`);

    }


    return (

        <>
        <div className='con'>
            <div className='imag'>
                
                { item.map((l)=>{
                     
                     let i=l.image;
                    return (
                        
                    <img src={i}></img>)

                 })}
            </div>

            <div className='details'>

              
                {
                    item.map((r)=>{
                        return (<h1>{r.title}</h1>)
                    })
                     
                }

{
                    item.map((s)=>{
                        return (<h1>RS {s.price}</h1>)
                    })
                     
                }
              
            </div>
             
        </div>

        <div className='remain'>

        {
            noitem.map((m)=>{
                let ig=m.image;
                return (
                    <div className='c' onClick={()=>{Change(m.id)}}>
                 <img src={ig}></img>

                    </div>
                )
            })

        }

        </div>
        
        
        </>
    )
}

export default Item;
