import React, { useState, useMemo } from 'react';

const FactorialCalculator:React.FC=()=>{
    const [number, setNumber] =useState<number>(5);
    const [darkmode, setDarkMode] = useState<boolean>(false);

    const factorial = useMemo(() => {
        console.log('calculating factorial...');
        const computerFactorial = (n: number): number =>{
            if(n<=1) return 1;
            return n * computerFactorial(n-1);
        }
        return computerFactorial(number);
    }, [number]);

    const themeStyles: React.CSSProperties = {
        backgroundColor: darkmode ? '#333': '#fff',
        color: darkmode ? '#fff': '#000',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '8px', 

    };
    return(
        <div>
            <h2>Factorial Calculation</h2>
            <input type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>
        Factorial of {number} is <strong>{factorial}</strong>
      </div>
        </div>
    )
}


export default FactorialCalculator;