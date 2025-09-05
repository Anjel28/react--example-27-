import React, { useState, useEffect } from 'react';

const Timer:React.FC=()=>{
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds (Prev => Prev+1);
        }, 1000);
        return()=> clearInterval(interval);
    }, [])
    return<h2>Time: {seconds} Seconds</h2>
}

export default Timer;