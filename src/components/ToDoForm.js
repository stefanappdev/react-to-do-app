import React, { useState } from 'react'

function ToDoForm(props) {
  const[input,setInput]=useState("")
  
  function handleSubmit(e){
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input
    });
    setInput("");
  };
  

  function handleChange(e){

   
    setInput(e.target.value);
   
  }

 

  return (
    <form 
    className='todo-form' 
    onSubmit={handleSubmit}
  
    >

    <input 
    className='todo-input' 
    type="text" 
    placeholder='add a todo' 
    value={input}
    onChange={handleChange}
    >



    </input>

    <button className='todo-button'>Add task</button>
    </form>
  )
}

export default ToDoForm