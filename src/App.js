import React from "react";
import Todo from "./Todo";

export default function App(){
  
 const[formdata,setdata]=React.useState(

            {todoitem:""}

                    )


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
    event.preventDefault();
    console.log("Something was submitted")
    let item=event.target.todoitem;
    console.log(item.value)
    }

  
  
  return(<>

       


        <form onSubmit={handleSubmit}>
            <input
                name="todoitem"
                type="text"
                onChange={handleChange}
                placeholder="Enter new task here"
                
            
            />
              
            <input type="submit" value="add new task" />
        </form>

    </>)

  }
