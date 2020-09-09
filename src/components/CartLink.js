import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import {ShoeContext} from '../ShoeContext/ShoeContext'
const CartLink = (props) => {
  
    var {CartItems}=useContext(ShoeContext);
     return(
      <div className="cartIcon">
          <NavLink to='/cart'  className="navbarLink" ><strong>Go to cart</strong> <FontAwesomeIcon  icon={faShoppingCart} />{CartItems.length|| 0} </NavLink> 
      </div>
     );
   
   }
    
   export default CartLink