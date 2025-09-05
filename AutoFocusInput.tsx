//ACCESING DOM ELEMENT
import React, { useRef, useEffect } from 'react';

const AutoFocusInput: React.FC = ()=>{
 const inputRef = useRef<HTMLInputElement | null> (null);

 useEffect(()=> {
   inputRef.current?.focus();
 }, []);

 return<input ref={inputRef} />
}

export default AutoFocusInput;


