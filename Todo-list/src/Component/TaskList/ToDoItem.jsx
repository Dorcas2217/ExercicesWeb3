import React from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteTask }) {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.isCompleted ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
