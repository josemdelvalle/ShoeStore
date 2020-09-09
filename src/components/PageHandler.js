import React from 'react';
import Billboard from './BillBoard';
import Billboard2 from './BillBoard2';
import Carousel from './Carousel';
import {Route} from 'react-router-dom';
import FilterBar from './FilterBar';
import ProductContainer from './ProductContainer';
import ProductShowCase from './ProductShowCase';
import CheckOutList from './CheckOutList';
const PageHandler =(props)=> {
  
     return(
       <div>
         <Route exact path='/' component ={ Billboard}></Route>
         <Route exact path='/' component ={ Carousel}></Route>
         <Route exact path='/' component ={ Billboard2}></Route>
         <Route exact path='/allshoes' component={FilterBar}></Route>
         <Route exact path='/allshoes' component={ProductContainer}></Route>
         <Route exact path='/productPage' component={ProductShowCase}></Route>
         <Route exact path='/cart' component={CheckOutList}></Route>
       </div>
     )
  }
  
  export default PageHandler;