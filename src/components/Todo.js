import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import TodoList from './TodoList'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({todos,completeTodo,removeTodo,editTodo}) {
  const[edit,setEdit]=useState({

    id:null,
    value: ""
  })

 const submitupdate=value=>{
  editTodo(edit.id,value);
  setEdit({

id:null,
value:''

  })
 };

 if (edit.id){
  return<ToDoForm edit={edit} onSubmit={submitupdate}/>
 }


  
  return todos.map((todo,index)=>(

    <div className={todo.isComplete?"todo-row-complete":"todo-row"} 
    key={index}>

      <div key={todo.id} onClick={()=>completeTodo(todo.id)}>

          {todo.text}

      </div>
          
        <div className='icons'>

        <EditIcon className='edit-icon'
        onClick={()=>setEdit({id:todo.id,value:todo.text})}
        />

        <DeleteIcon className='delete-icon' 
        onClick={()=>removeTodo(todo.id)}
        />
      </div>
  
  </div>
  ));
}

export default Todo;