import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, actions) {
            console.log(state);
            console.log(actions);
            state.todos.push({
                id: id,
                text: actions.payload.text,
                completed: false,
            })
        },
        removeTodo(state, actions) { },
        toggleTodoComplete(state, actions) { },
    }
})

export const{addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;