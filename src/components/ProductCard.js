import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {ShoeContext} from '../ShoeContext/ShoeContext'; 
const ProductCard = (props) => {
  var {setSetProduct,setImage}=useContext(ShoeContext);
   return(
   <div className="productCard">
   <NavLink to='/productPage' onClick={()=>{setSetProduct(props);setImage(props.images[0])}}><img className="productImage"src={props.images[0]} alt=""/></NavLink>
   <div className="colorQuantity">Colors {props.color.length}</div>
   <div className="productColorContainer">&nbsp;<div className="productColor"style={{backgroundColor:props.color[0]}}> &nbsp;</div><div className="productColor"style={{backgroundColor:props.color[1] ||"white"}}> &nbsp;</div></div>
   <div className="productName"><strong>{props.name}</strong></div>
   <div className="productPrice">${props.price}</div>
   {/* <div className="saleBlock">Sale {props.sale}</div> */}
   </div>
   );
 }
  
 export default ProductCard

