import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';



function TodoItem({ todo }) {

    // state for editable content after edit the todo using setIsTodoEditable
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    // changing the todo message what we wanted to edit
    const [todoMsg,setTodoMsg] = useState(todo.todo);
    
    // These functionalities are coming from contextApi 
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()


    // function defination for edit the content
    const editTodo = () =>{
        // updateTodo functionality is expacting 2 parameters one is id of the content which have to update and another is a object which contain the previous state of the todo array and todo message which have to insert after edit
        updateTodo(todo.id,{...todo,todo:todoMsg})
        // after insert and save we r making editable false
        setIsTodoEditable(false);
    }
    
    const toggleCompleted = () =>{
        // This is for toggle which takes the id of the todo
        toggleComplete(todo.id)
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
