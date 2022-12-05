import React, { useState } from "react";

export const Toggel=()=>{
    const [data, setData]=useState('')
    return(
        <div>
            <h1>Change the backgroundcolor</h1>
            <button onClick={()=>setData('Red')}>Red</button>
            <button onClick={()=>setData('Blue')}>Blue</button>
            <button onClick={()=>setData('Orange')}>Orange</button>

            <div style={{backgroundColor: `${data}`}}>Hello</div>
        </div>
    )
}