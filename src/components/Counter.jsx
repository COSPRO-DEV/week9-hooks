import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)
  const handleReset = () => setCount(0)

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter