import React from "react";
import "./styles/App.css";
import "./styles/edititem.css"
import editItem from "./components/edit.js";
import deleteItem from "./components/delete.js";
import Checked from "./components/checked";

export default function App(){
  
 const[formdata,setdata]=React.useState(

            {todoitem:""}

                    )


const [Todolist,setState]= React.useState([]);


function addItem(item){
  setState(prev=>[...prev,item])
}


 
  console.log(formdata);

  function handleChange(event){

        setdata(prevdata=>{
          return(  
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
            )
        
        
        })
    
  }

    function handleSubmit(event){

    event.preventDefault()
    console.log("Something was submitted");
    let item=event.target.todoitem.value;

    if(item===""){
      alert("Please enter a task")
    }

    else{
      addItem(item);
      alert("New task added")
      formdata.todoitem='';
    }
    
  }

    
     const dolist=Todolist.map(item=> 
    <div class="itm-con" id={`ITEM${Todolist.indexOf(item)}`}>
            <p class="item--info">{item}</p> 

        
          <button class="edit-btn" onClick={editItem}>edit</button> 
          <button class="delete-btn" onClick={deleteItem}>delete</button>
          <Checked/>
        
          
    </div>
   
    ) 
  
  return(<>

    
    

    <div className="form-container">

      <span id="App-title">
      <strong>React Todolist app</strong>
      </span>
        <form id="item--form" onSubmit={handleSubmit}>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 id="form-header">Enter your tasks here!</h2>

            <input
                name="todoitem"
                type="text"
                onChange={handleChange}
                placeholder="Enter new task here"
                value={formdata.todoitem}
                className="form--input"
               
            />
              
            <button class="form--submit" type="submit" >Add new task </button> 
        </form>



        
      </div>
        
      <h1>Current To-do-list</h1>
       <div>{dolist}</div>

    </>)

  }
