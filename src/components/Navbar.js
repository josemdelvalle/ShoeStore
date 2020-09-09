import React from 'react';
import NavbarLogo from './NavbarLogo'
import NavbarLink from './NavbarLink'
import CartLink from './CartLink'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
   

   return(
    <div className="navbar">
     <ul>
     <li><NavbarLogo  name='SHOE STORE DEMO'></NavbarLogo></li>
     <li><NavbarLink  name='WOMEN'>
       <div className="dropdown-content">
        <NavLink className= "" to='/allshoes'>ALL WOMEN'S SHOES</NavLink>
        <NavLink className= "" to='/allshoes'>NEW ARRIVALS</NavLink>
        <NavLink className= "" to='/allshoes'>SPECIAL OFFERS</NavLink>
       
        </div>
       </NavbarLink></li> 
     <li><NavbarLink  name='MEN'>
        <div className="dropdown-content">
        <NavLink className= "" to='/allshoes'>ALL MEN'S SHOES</NavLink>
        <NavLink className= "" to='/allshoes'>NEW ARRIVALS</NavLink>
        <NavLink className= "" to='/allshoes'>SPECIAL OFFERS</NavLink>
        </div>
        </NavbarLink></li> 
     <li><NavbarLink  name='KIDS'>
        <div className="dropdown-content">
        <NavLink className= "" to='/allshoes'>ALL KID'S SHOES</NavLink>
        <NavLink className= "" to='/allshoes'>NEW ARRIVALS</NavLink>
        <NavLink className= "" to='/allshoes'>SPECIAL OFFERS</NavLink>
        </div>
       </NavbarLink></li> 
    
     </ul>
     <CartLink></CartLink>
    </div>
   );
 
 }
  
 export default Navbar