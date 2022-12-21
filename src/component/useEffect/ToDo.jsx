import React, { useEffect, useState } from 'react';

export const ToDo =()=>{
  const [todo, setTodo]=useState('');
  const [data, setData]=useState([]);

  const handleAdd =()=>{
    setData([...data,todo]);
    setTodo("");
  }

  const handleRemove =(item)=>{
    const filtered=data.filter((ele)=> ele !== item);
    setData([...filtered]);
  }
  useEffect(()=>{
    alert('Please Add The Item')
  },[data]);
  return(
    <div>
      <h1>ToDo List</h1>
      <input value={todo} type="text" placeholder='Add The Item...' onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          data.map((item)=>(
            <li onClick={()=>handleRemove(item)}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}