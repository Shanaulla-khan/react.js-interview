import React, { useState } from "react";

export const Counter=()=>{
    const [count, setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }

    const handleDecrement=()=>{
        setCount(count-1);
    }

    const handleReset=()=>{
        setCount(0);
    }
    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}