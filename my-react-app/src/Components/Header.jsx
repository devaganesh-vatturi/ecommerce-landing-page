import './Header.css';
import cart from './images/cart.png';
function Header()
{ 

return(
<>
<div className='fakestore-header'>

<p className="fakestore-head-name">E-Commerce Landing page</p>
    <img id="header-img" src={cart} alt="cart" />
    
   </div>

    </>
);

}
export default Header;