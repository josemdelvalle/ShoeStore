import React, {useContext} from 'react';
import {ShoeContext} from '../ShoeContext/ShoeContext'

const FilterBar = () => {
    var {setFilter}=useContext(ShoeContext);

    function setSetFilter(x){
        console.log(x);
        setFilter(x);
    }
   return(
    <div className="FilterNav">
        <ul>
            <li>Filter by:</li>
            <li><button onClick={()=>{setSetFilter('All')}}className="FilterButtons">AllShoes</button></li>
            <li><button onClick={()=>{setSetFilter('Women')}}className="FilterButtons">Women</button></li>
            <li><button onClick={()=>{setSetFilter('Men')}}className="FilterButtons">Men</button></li>
            <li><button onClick={()=>{setSetFilter('Kids')}}className="FilterButtons">Kids</button></li>
        </ul>
    </div>
   );
    
 }
  
 export default FilterBar