import React from 'react'
import './Herosec.css';
import computer from './Components/images/computer.jpg';
import cloths from './Components/images/cloths.jpg';
import mobiles from './Components/images/mobiles.webp';
import toys from './Components/images/toys.webp';
import accessories from './Components/images/accessories.webp';
export default function Herosec() {
  return (
    <>
    <div className='hero-main'>
    <div className='div1 computer'>
        <img src={computer} alt='img'height="87%" width="100%"/>
        <p>Computers</p>
    </div>
    <div className='div1 Cloths'>
    <img src={cloths} alt='img'width="100%" height="87%"/>
      <p>Cloths</p>
    </div>
    <div className='div1 mobiles'>
    <img src={mobiles} height="87%" width="100%" alt='img'/>
    <p>Mobiles</p>
     </div>
    <div className='div1 Toys'>
    <img src={toys} height="87%"width="100%" alt='img'/>
    <p>Toys</p>
    </div>
    <div className='div1 access'>
    <img src={accessories} height="87%"width="100%" alt='img'/>
    <p>Accessories</p>
     </div>
</div>
    </>
  )
}
