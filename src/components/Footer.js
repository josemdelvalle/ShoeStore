import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faYoutubeSquare,faPinterest,faSnapchat,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    
   return(
    <div >
      <div className="FooterContainer1">
        <ul className="footerList">
        <li>FIND A STORE</li>
        <li>VIEW SPECIALS</li>
        <li>SITEMAP</li>
        </ul> 
        <ul className="footerList">
        <li>MY ACCOUNT</li>
        <li>Orders and Returns</li>
        <li>Sign In</li>
        <li>Saved Products</li>
        </ul> 
        
        <ul className="footerList" >
        <li>CUSTOMER SERVICE</li>
        <li>Product Information</li>
        <li>Contact Us</li>
        <li>Help / FAQ</li>
        </ul> 

      
        <div className="footerSocial">
        <FontAwesomeIcon className="socialIcon" icon={faPinterest} />
        <FontAwesomeIcon className="socialIcon" icon={faYoutubeSquare} />
        <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
        <FontAwesomeIcon className="socialIcon" icon={faSnapchat} />
        <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
        <FontAwesomeIcon className="socialIcon" icon={faInstagram} />

         </div>
    </div>
      <div className="FooterContainer1 textCenter ">
      <div >United States | USD</div> 
      <div >Copyright © 2020 SKECHERS USA, Inc.</div>
      <div>   </div>
      <NavLink to='/'>Privacy Policy</NavLink> <NavLink to='/'>CA Privacy Notice</NavLink> <NavLink to='/'>Cookies Policy</NavLink> <NavLink to='/'>Terms of Use</NavLink>
      </div>
    </div>
   );
    
 }
  
 export default Footer