import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

// geting the context from TodoContext

function TodoForm() {
    // state to catch all todos which are present 
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() // add todo is holding the all current state

    // This func helps to add data to our todo list
    const add = (e) => {
      e.preventDefault()
      
      // if no todo is here then it returns the current state
      if (!todo) return

      addTodo({ todo, completed: false}) // if already todo exist then it set the state empty, and completed false
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)} //geting the value of todo from the input
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;