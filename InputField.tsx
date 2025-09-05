//vfrom field validatation message

import React from 'react';

interface IProps{
    error: boolean | null ;
}

const InputField:React.FC<IProps> = ({error}: IProps) =>{
    return(
        <>
        <input type="text" />
        {error? <h1 style={{color: 'red'}}>{error}</h1>: null}
        
      
        </>
    )
}

export default InputField;