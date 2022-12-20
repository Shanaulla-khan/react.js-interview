import React, { useState } from "react";

export const Clock=()=>{
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime]=useState(time);

    const updateTime =()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setIntervel(updateTime, 1000);
    return(
        <div>
            <h1>Digital Clock</h1>
            <h1>{ctime}</h1>
        </div>
    )
}
