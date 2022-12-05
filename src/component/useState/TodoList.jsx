import React, { useState } from "react";

export const TodoList=()=>{
    const [text, setText]=useState('');
    const [data, setData]=useState([]);

   const handleRemove=(index)=>{
    const remove=data.filter((elem, ele)=> ele!==index);
    setData([...remove]);
   }
    return(
        <div>
            <h1>ToDo List</h1>
            <input value={text} placeholder="add the item" type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>setData([...data, text], setText(''))}>Add</button>

            <ul>
                {
                    data.map((elem,index)=>(
                        <li key={index} onClick={()=>handleRemove(index)}>{elem}</li>
                    ))
                }
            </ul>
        </div>
    )
}