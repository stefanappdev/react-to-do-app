
import React from "react"
import { render } from "react-dom"

export default function Todo(){      
    const [Arr,setState]= React.useState([])

    function addItem(){
    
        setState(prevArr=> [...prevArr,<div>{`item${prevArr.length+1}`}</div>]
            
            )
    
    }
    
    const dolist=Arr.map(item=>{

            <div>item</div>
        })       
        
    
          
return (<>
<div>ToDolist:{Arr}</div>
<button onClick={addItem}>+</button>
</>)
}

