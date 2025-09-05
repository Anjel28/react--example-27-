import  { useRef } from 'react';

let countRef = useRef(0)

function  Increment() {
  countRef.current += 1
  console.log("Current count:", countRef.current);
}

export default Increment;