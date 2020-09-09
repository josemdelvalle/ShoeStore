import React,{createContext,useState,useEffect} from 'react';
import {database} from '../config/fbconfig';

export const ShoeContext =createContext();
const ShoeContextProvider=(props)=> {
  const [shoes,setShoes]=useState([]);
  var [filter,setFilter]=useState("");
  const [product,setProduct]=useState();
  const [Image,setImage]=useState();
 var [CartItems,setCartItems]=useState([]);
 
 
//  const [CartItems,setCartItems]=useReducer(reducer,CartItems);
const AddItem=()=>{
  console.log("lol");
setCartItems(CartItems=>[...CartItems,product],console.log(CartItems));
//setCartItems({arr: [...CartItems,product]});

}
function setSetProduct(item){
  setProduct(product=>item);
  
  }

  useEffect(() => {
    var p; var shoesarr=[];
 
    database.collection("Shoes").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          p=doc.data();
          for (const [key, value] of Object.entries(p)) {
          //console.log(key, value );
          shoesarr.push(value);
        }
        setShoes([...shoesarr]);
      });
  });
  },[]);
  
  return ( <ShoeContext.Provider value={{shoes,filter,setFilter,product,setSetProduct,Image,setImage,CartItems,AddItem}} >
            {props.children}
        </ShoeContext.Provider>  );
    }
export default ShoeContextProvider;