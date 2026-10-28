import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    const text = inputValue.trim()
    if (text === '') return
    setTodos([...todos, { id: Date.now(), text }])
    setInputValue('')
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList