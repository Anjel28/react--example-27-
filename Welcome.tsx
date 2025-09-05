//EXAMPLE OF CHANGE PROPS AND STATE IN USEEFFECT 
import React, { useState, useEffect } from 'react';

type Props={
 username: string;
}

const Welcome: React.FC<Props>=({username})=>{
    const [greeting, setGreeting] = useState(' ');

    useEffect(()=>{
        setGreeting(`Hello, ${ username }!`);
    console.log ('Username changed: ', username);
}, [username]);

return<h2>{greeting}</h2>
}

export default Welcome;