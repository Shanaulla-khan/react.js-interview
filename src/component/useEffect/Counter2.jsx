import React, { useEffect, useState } from "react";

export const Counter2=()=>{
    const [count, setCount]=useState(0);
    const [data, setData]=useState('');

    useEffect(()=>{
     if(count % 2===0){
        setData('blue')
     }
     else if(count % 2===1){
        setData('orange')
     }
    },[count])
    return(
        <div>
            {/* //to Print the Even value to change the color blue// */}
            {/* //to print the odd value to change the color orange// */}
            <h1>Counter 2.O</h1>
            <h1 style={{color: data}}>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
