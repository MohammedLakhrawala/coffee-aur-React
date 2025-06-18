import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo, setEditingTodo,updateTodo,clearEditingTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const editingTodo = useSelector((state) => state.todo.editingTodo) // Get the todo being edited from the state
    // const [editText, setEditText] = useState('') // State to hold the text of the todo being edited
    const dispatch = useDispatch()

    useEffect(() => {
        if (editingTodo) {
            console.log('Editing Todo:', editingTodo.text)
            setInput(editingTodo.text) // Set input to the text of the todo being edited
        } else {
            setInput('') // Clear input if not editing
        }
    }, [editingTodo])


    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() === '') return;
        if(editingTodo) {
            dispatch(updateTodo({id: editingTodo.id, text: input}))
            dispatch(clearEditingTodo()) // Clear the editing state after updating
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
        {editingTodo && (
            <button
            type="button"
            onClick={() => dispatch(clearEditingTodo())}
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
            Cancel
            </button>
        )}
    </form>
  )
}

export default AddTodo