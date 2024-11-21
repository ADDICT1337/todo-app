import React, { useState } from 'react';
import TodoItem from './TodoItem';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      <div className="d-flex justify-content-center mt-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="btn btn-primary ms-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
