import React, { useRef, useEffect  } from 'react';

function valueTracker ({value}: {value: number }){
  const prevValue = useRef<number | undefined>(undefined);


    useEffect (()=>{
     if(prevValue.current !== undefined && prevValue.current!== value){
        console.log(`changed from ${ prevValue.current  } to $ { value } `);
     }
     prevValue .current = value;
    }, [value]);

    return<div>{value}</div>
}

export default valueTracker;