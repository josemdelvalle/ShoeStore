import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'


const NavbarLink = (props) => {
  const [isDropDown, setIsDropDown]=useState(false);

  
   return(
    <div  onMouseEnter={()=>setIsDropDown(!isDropDown)}onMouseLeave ={()=>setIsDropDown(!isDropDown)}>
    <NavLink to='/'  className="navbarLink" ><strong>{props.name}</strong><FontAwesomeIcon icon={faAngleDown} /></NavLink> 
    {isDropDown && props.children}
  
    </div>
   );
 
 }
  
 export default NavbarLink