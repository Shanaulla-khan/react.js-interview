import React, { useEffect, useState } from "react";

export const Alertcount=()=>{
    const [count, setCount]=useState(0);
    const [decre, setDecre]=useState(0);
    useEffect(()=>{
        alert('value is increment')
    },[count])
    useEffect(()=>{
        alert('value is decrement')
    },[decre])
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click me {count}</button>
            <button onClick={()=>setDecre(decre-1)}>Click me {decre}</button>   
        </div>
    )
}