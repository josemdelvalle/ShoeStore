import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarLogo = (props) => {
    
   return(
    <div>
    <NavLink to='/' className="navbarLogo" >{props.name}</NavLink>
    </div>
   );
 
 }
  
 export default NavbarLogo