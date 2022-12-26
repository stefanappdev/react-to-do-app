import React from "react";
import "./styles/App.css";
import "./styles/edititem.css";
import "./styles/media.css"
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
            <div class="item--info">{item}</div> 

        
          <button class="edit-btn" onClick={editItem}>edit</button> 
          <button class="delete-btn" onClick={deleteItem}>delete</button>
          <Checked/>
        
          
    </div>
   
    ) 
  
  return(<>

    
    

    <div className="form-container">

      <span id="App-title">
      <strong>React To-do-list app</strong>
      </span>


        <form id="todolist-form" onSubmit={handleSubmit}>

        
          <h2 id="form-header" class="form-item">Enter your tasks here!</h2>

            <input
                name="todoitem"
                type="text"
                onChange={handleChange}
                placeholder="Enter new task here"
                value={formdata.todoitem}
                className="form-input"
               
            />
              <br/>
              <br/>
            <button class="form-item" id="form-submit" type="submit" >Add new task </button> 
        </form>
        
      </div>
        
      


      <div class="dropdown">
        <img src="images/menu.png" alt="dropdown-menu"/>
          <div class="dropdown-content">
          <div>{dolist}</div>   
          </div>
    </div>
     
        
    </>)

  }
