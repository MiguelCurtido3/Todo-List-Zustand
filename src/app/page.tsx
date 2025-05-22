'use client';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import { useTodoStore } from '../store/todoStore';

export default function Page() {
  const [input, setInput] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  function handleAdd() {
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        To‑Do App
      </h1>
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-xl w-full max-w-lg mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
      <div className="w-full max-w-xl">
        <TodoList />
      </div>
    </div>
  );
}
