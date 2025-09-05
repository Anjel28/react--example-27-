//basic list conditional
import React from 'react';

const Fruits: string[] =  ['Apple', 'Banana', 'Cherry'];

const FruitList: React.FC = ()=>{
    return(
        <>
        <ul>
            {Fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        </>
    )
}

export default FruitList;