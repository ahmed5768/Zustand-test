import { useState } from "react"
import useStore from "../states/UseStore"

function CounterAndTodo() {
  const [text, setText] = useState('')
  const { count, increment, decrement, theme, toggletheme, reset, todos, addTodo, toggleTodo, removeTodo } = useStore()

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      {/* counter  */}
      <div className="bg-blue-300">
        <div className="text-center mt-50 ">
          <h1>Zustand with Slice</h1>

          <h2>Counter: {count}</h2>
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={reset}>Reset</button>

          <h2>Theme: {theme}</h2>
          <button onClick={toggletheme}>Toggle Theme</button>
        </div>



        {/* todo  */}
        <div className="text-center mt-40" >
          <h2>Todo</h2>

          <input
            value={text}
            onChange={handleChange}
            placeholder="Add a task"
          />
          <button onClick={handleAdd}>Add</button>

          <ul className="list-none p-0 mt-20">
            {todos.map((todo) => (
              <li key={todo.id} className="mb-10">
                <span
                  className={`${todo.done ? 'line-through' : 'no-underline'} mr-2`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>

  )
}

export default CounterAndTodo