import React, { useState } from "react";
import { Users } from "./Users";

export const Aapp=()=>{
    const [todo, setTodo]=useState("");
    const [data, setData]=useState([])

    const handleAdd=()=>{
     setData([...data,todo]);
     setTodo("");
    }
    return(
        <div>
            <input type="text" placeholder="Search..." onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                Users.map((user)=>(
                <li>{user.first_name}</li>
                    ))
                }
            </ul>
        
            
        </div>
    )
}