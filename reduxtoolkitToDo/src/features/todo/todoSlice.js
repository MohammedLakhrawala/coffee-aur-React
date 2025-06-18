import { createSlice, nanoid } from "@reduxjs/toolkit";

//this is the initial state of the todo slice
const initialState = {
    todos: [{id: nanoid(), text: "Learn Redux Toolkit", editingTodo: null}], // Initial todo item for demonstration
    //editingTodo: null, // This will hold the ID of the todo being edited
}


//this is the todo slice, it contains the reducers and actions for the todo feature
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            if(todo.text.trim() === '')
                {return alert("the todo is empty, please enter a valid todo")}
            else state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => {
                return todo.id !== action.payload});
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
            state.editingTodo = null; // Clear the editing state after updating
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload; // Set the ID of the todo being edited
        },
        clearEditingTodo: (state) => {
            state.editingTodo = null; // Clear the editing state
        }
    }
})

export const { addTodo, removeTodo, updateTodo, setEditingTodo, clearEditingTodo } = todoSlice.actions;

// This is the todo slice reducer, it will be used in the store
export default todoSlice.reducer;
