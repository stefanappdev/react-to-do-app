import React from "react";
import "./App.css";
import editItem from "./edit.js";
import deleteItem from "./delete.js";

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
    addItem(item);
    formdata.todoitem='';
    }

    
     const dolist=Todolist.map(item=> 
    <div id={`ITEM${Todolist.indexOf(item)}`}>
            <p class="item-info">{item}</p> 
          <button onClick={editItem}>edit</button>
          <button onClick={deleteItem}>delete item</button> 
    </div>
   
    )
  
  return(<>

       

    <div className="form-container">
        <form onSubmit={handleSubmit}>
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
        
       <div>{dolist}</div>

    </>)

  }
