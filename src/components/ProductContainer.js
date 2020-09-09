import React, {useContext} from 'react';
import ProductCard from './ProductCard';
import {ShoeContext} from '../ShoeContext/ShoeContext'
const ProductContainer =(props)=> {
   
    var {shoes}=useContext(ShoeContext);
    var {filter}=useContext(ShoeContext);
    console.log(shoes);
    var result;
    
 
  if(filter=='Men'){
   result = shoes.filter(item => item.name.includes('M'));
    console.log(result)
  } else if (filter=='Women') {
    result = shoes.filter(item => item.name.includes('W'));
    console.log(result)
  } else if (filter=='Kids') {
    result = shoes.filter(item => item.name.includes('K'));
    console.log(result)
  } else {
    result=shoes;
    console.log(result)
  }

     return(
       <div className="ProductList">
             {result.map(shoe=>{return(<div className="ProductContainer">
    <ProductCard  images={shoe.images} price={shoe.price}sale={shoe.sale}name={shoe.name}color={shoe.colors}></ProductCard>
  </div>)})} 
       </div>
     )
  }
  
  export default ProductContainer;