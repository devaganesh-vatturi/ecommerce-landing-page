import { useEffect, useState } from "react";
import React  from "react";
import './App.css';
import './Components/List';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from "./Components/List";
import Herosec from "./Herosec";
function App()
{
    
  const [prod, setProd]=useState([])
  useEffect(
       ()=>{
        fecthing();
        },[]
       )
async function fecthing() {
  let res= await fetch('https://fakestoreapi.com/products');
        let str= await res.json();
        setProd(str);
}
   

  if( prod.length === 0)
  {
    return (<></>);
  }

  return( 

    <>
   
    <Header/>
    <Herosec/>
    <p id='suggest'>Suggested Products</p>
    <div className="Fakestore-product">
    {prod.map((p)=><List key={p.id} {...p}></List>)}
    
   
    </div>
    <Footer/>
    </>
    
    )
}
export default App;