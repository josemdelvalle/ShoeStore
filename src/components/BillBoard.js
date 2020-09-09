import React from 'react';
import Billboard1 from '../imgs/Billboard1.jpg';
import {NavLink} from 'react-router-dom';

const BillBoard = () => {

   return(
    <div>
      <NavLink to='/'><img  className="Billboard"src={Billboard1} alt=""/></NavLink>
    </div>
   );
    
 }
  
 export default BillBoard