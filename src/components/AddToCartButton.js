import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import {ShoeContext} from '../ShoeContext/ShoeContext';
const AddToCart = () => {
 
    var {AddItem}=useContext(ShoeContext);
    
   return(
    <div>
     <button className="AddToBtn"onClick={()=>AddItem()}><strong >ADD TO CART <FontAwesomeIcon  icon={faShoppingCart} /></strong></button>
    </div>
   );
    
 }
  
 export default AddToCart