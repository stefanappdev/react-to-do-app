import React from 'react'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList'
import "./styles/App.css"
export default function App() {
  return (
    <div className='todo-app'>
    
    <TodoList/>
    </div>
  )
}
