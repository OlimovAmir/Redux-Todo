import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require('uuid');


const todoSlice = createSlice({
    
    name: 'todos',
    initialState: {
        todos: [],
    },
    
    reducers: {
        
        addTodo(state, actions) {
            console.log(state);
            console.log(actions);
            const id = uuidv4();
            state.todos.push({
                
                id: id,
                text: actions.payload,
                completed: false,
            })

        },
        removeTodo(state, actions) {
            state.todos = state.todos.filter(todo=> todo.id !== actions.payload )
         },
        toggleTodoComplete(state, actions) { },
    }
})

export const{addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;