import React from 'react';

const TodoItem = ({ id, text, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {text}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
