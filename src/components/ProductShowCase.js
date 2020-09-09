import React, {useContext} from 'react';
import {ShoeContext} from '../ShoeContext/ShoeContext'; 
import { Redirect } from "react-router-dom";
import AddToCartBtn from "./AddToCartButton";
const ProductShowCase =(props)=> {
    var {product,Image,setImage}=useContext(ShoeContext);
    if (!product){
        return <Redirect to={"/"} />
    }
    function dimBackground(e) {
        e.target.style.opacity = '.5';
      }
      function undimchangeBackground(e) {
        e.target.style.opacity = '1';
      }
      function setImgae(e){
        setImage(e.target.src);
        console.log(e.target.src);
      }
    function getImages(){
        return  product.images.map(image=>{
            return(<div  style={{marginBottom:"2px", border:"solid wheat 1px", height: "100px", width:"100px"}}><img onClick={setImgae} onMouseEnter={dimBackground}onMouseLeave ={undimchangeBackground}className="productImage"src={image} alt=""/></div>)
        })
    }
     return(
       <div style={{height: "700px"}}>
           <div style={{ height: "100%", width:"50%", float:"left"}}>
            <ul style={{  float:"left",padding:"0px"}}>
             {getImages()}
            </ul>
            <div style={{marginTop:"13px",marginLeft:"9px", border:"solid grey 1px", float:"left",position: 'relative', height: "600px", width:"600px"}}><img className="productImage"src={Image} alt=""/></div>
            </div>
            <div style={{overflow:"hidden"}}>
            <h1>TITLE: {product.name}</h1>
           <h3>Price: ${product.price}.00</h3>
           <h4 style={{width:"80%"}}> <div className="colorQuantity">Colors {product.color.length}</div></h4>
           <div className="productColorContainer ">&nbsp;<div className="productColor"style={{backgroundColor:product.color[0]}}> &nbsp;</div><div className="productColor"style={{backgroundColor:product.color[1] ||"white"}}> &nbsp;</div></div>
           <h4>Description</h4>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio rem officia quod provident nulla deserunt voluptatum, id iste quia sit eveniet quam aut quas cum ad? Iste porro veritatis quos.</p>
        <AddToCartBtn></AddToCartBtn>
            </div>
           
       </div>
     )
  }
export default ProductShowCase;