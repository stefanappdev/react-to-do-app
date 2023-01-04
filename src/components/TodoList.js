import React,{useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo'

function TodoList() {
  const [todos,setTodos]=useState([])
  
  function addTodo(todo){

  if (!todo.text||/^\s*$/.test(todo.text)){
    return;
  }

    let newTodos=[...todos,todo]
    setTodos(newTodos);
    //console.log(...Todos)
    
  }
  
  function removeTodo(id){


    const removeArr=[...todos].filter(todo=>todo.id!==id)
    setTodos(removeArr);
  
  } ;


  function completeTodo(id){
    let updatedTodos=todos.map(todo=>{

      if(todo.id===id){
        todo.isComplete=!todo.isComplete;
      }
      return todo;
    })
  }

 function editTodo(todoId,newValue){

  if (!newValue.text||/^\s*$/.test(newValue.text)){
      return;
  }

  setTodos(prev=>prev.map(item=>(item.id===todoId?newValue:item))
  
  ); 
 }

  return (
    <div>
    
    <h1>What's Happening Today?</h1>  
     <ToDoForm onSubmit={addTodo}/>
     <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      editTodo={editTodo}
     />
      </div>
  )
}

export default TodoList