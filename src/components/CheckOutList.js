
import React, {useContext} from 'react';
import {ShoeContext} from '../ShoeContext/ShoeContext';
import CheckOutButton from './CheckOutButton';
const CheckOutList = () => {
  var {CartItems}=useContext(ShoeContext);
  console.log(CartItems);
  var price=0;

    CartItems.map(shoe=>{
      price+= parseInt(shoe.price);
      console.log(price)
    })
 
  
function getTotal(){
  if(CartItems.length==0){
return(
      <div>
      <h5>Pre-Tax Subtotal:  </h5>
      <h5>Estimated Shipping:  </h5>
      <h5>Estimated Tax:  </h5>
      <h5>Total:  </h5>
      </div>
       )
}
else{
  return(
    <div>
    <h5>Pre-Tax Subtotal: ${price}  </h5>
    <h5>Estimated Shipping: $8 </h5>
    <h5>Estimated Tax:  $0</h5>
    <h5>Total: ${price+8} </h5>
    </div>
     )
}
}
function cartItem(){
  return CartItems.map(shoe=>{
    console.log(shoe);
    return(<div style={{height:"110px", width:"100%", borderTop:"solid grey 1px"}}>
      <img style={{height:"100%", width:"120px",float:"left"}} src={shoe.images[0]} alt=""/>
      <h3 style={{margin:'0px',marginLeft:"9px",float:"left",height:"100%"}}> <div style={{marginTop:"50%" }}><strong>{shoe.name}</strong></div></h3>
      <div style={{marginLeft:"9px",float:"left",height:"100%"}}> <div style={{marginTop:"50%" }}> <strong>Colors: {shoe.color.length}</strong> </div> </div>
      <div style={{marginLeft:"9px",float:"left",height:"100%"}}className="productColorContainer"><div style={{marginTop:"50%" }}>&nbsp;<div className="productColor"style={{backgroundColor:shoe.color[0]}}> &nbsp;</div><div className="productColor"style={{backgroundColor:shoe.color[1] ||"white"}}> &nbsp;</div></div></div>           
      <div style={{marginLeft:"9px",float:"left",height:"100%"}}className=""><div style={{marginTop:"50%" }}><strong>Price: ${shoe.price}</strong> </div></div>
      </div>
          )

  })
}
  function displayItems(){
    if(!CartItems || CartItems.length===0){
      return (<div style={{border:"solid grey 1px",padding:"5px", width:"96%"}}>
              <h3>SHOPPING CART</h3>
              <p>Your shopping cart is empty.</p>
              </div>
        );
    }
    else{
      return(<div style={{border:"solid grey 1px", width:"96%"}}>
      <h3 style={{paddingLeft:"5px"}}>SHOPPING CART</h3>
      <p style={{paddingLeft:"5px"}}>You have {CartItems.length} item in you cart: </p>
      {cartItem()}
      </div>)
    }
  }
   return(
     <div className="CheckoutListContainer "style={{height:"700px"}}>
    <div style={{float:"left",height:"100%", width:"55%",overflowY:"scroll"}}>
     {displayItems()}
    </div>
    <div style={{padding:"5px",overflow:"hidden",height:"100%"}}> 
    <div style={{border:"solid wheat 1px",overflow:"hidden"}}>
     <div style={{overflow:"hidden",float:"left"}}>
     <h2>SUMMARY</h2>
      <div style={{textAlign:"right",width:"300px"}}>
      {getTotal()}
      </div>
      </div>
      </div>
      <CheckOutButton></CheckOutButton>
      </div>
    </div>
   );
    
 }
  
 export default CheckOutList