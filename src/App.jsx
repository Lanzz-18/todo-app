import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo =()=>{
    if(input=="") return // refuse added empty tasks
    setTodos([...todos, { id: Date.now(), text: input, completed: false}])
    setInput("") // clear input
  }

  return (
    <>
      <div className="search-group">
        <input
          type="text"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
