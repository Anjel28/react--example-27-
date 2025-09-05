
import React from 'react';

interface Iprops{
    price: number;
    isDiscounted: boolean;
}

const DisplayPrice: React.FC<Iprops> = ({price, isDiscounted}) =>{
    return(
        //ternary operator
        <>
        <div>
           {/* {isDiscounted ? <span style ={{color: 'red'}}>₹{price}
  </span> :  <span>₹{price}</span>}*/}
  {/*gogical operator */}
  {isDiscounted && <p>I am Anjel Chaudhary</p>}
        </div>
        </>
    )
}

export default DisplayPrice;