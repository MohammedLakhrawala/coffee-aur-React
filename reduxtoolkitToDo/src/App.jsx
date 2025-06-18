import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store} >
      <AddTodo/>
      <Todos/>
    </Provider >
  )
}

export default App
