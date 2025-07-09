import {  useState } from "react";
import useStore from "../states/UseStore";

function CounterAndTodo() {
  const [text, setText] = useState('');
  const { count, increment, decrement, reset, theme, toggletheme, todos, addTodo, toggleTodo, removeTodo } = useStore();

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };



  return (
    <div className="min-h-screen flex bg-gray-900 text-white flex-col items-center p-10">
      <h1 className="text-6xl mb-5">Zustand with Slice</h1>
      <h1 className="text-4xl mb-2">COUNTER</h1>
      <h2 className="text-2xl mb-4">Counter: {count}</h2>

      <div className="space-x-4 mb-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={increment}>Increment</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-xl" onClick={decrement}>Decrement</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-xl" onClick={reset}>Reset</button>
      </div>

      <h2 className="text-xl mb-4">Theme: {theme}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-10" onClick={toggletheme}>
        Toggle Theme
      </button>

      <h1 className="text-4xl mb-4">Todo</h1>

      <div className="mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          className="border border-gray-400 rounded p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-indigo-500 text-white px-3 py-2 rounded">
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4 flex justify-between items-center">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`${todo.done ? 'line-through text-gray-400' : ''} cursor-pointer`}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CounterAndTodo;
