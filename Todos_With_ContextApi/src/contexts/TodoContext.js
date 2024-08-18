import { useContext, createContext } from "react";

// useContext to get all context and createComtext to create context

export const TodoContext = createContext({
    // functionalities that we have in our app for one todo card which have a todo message and toggle checkbox either the work done or not and every work has a indevidual id also
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    //These are the operation that what we can do in our app we can add Todo, updateTodo,deleteTodo,toggleComplete-- we just declear all function but none have any defination so these func has defination on App.jsx file
    addTodo: (todo) => {},
    updateTodo:(id,Todo)=>{},
    deleteTodo:(id) =>{},
    toggleComplete: (id)=>{}

})

export const useTodo = () =>{
    // to use useContext we r geting data from Todo context and returning hole func and data to the app component so we can use all functionalities easily
    return useContext(TodoContext)
}


// this is provider which is in use in App.jsx file where we wrapped the content under the provider and it helps to provide data

export const TodoProvider = TodoContext.Provider
