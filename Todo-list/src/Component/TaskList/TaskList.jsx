import React from 'react';
import ToDoItem from './ToDoItem';
const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
    return (
        <ul>
      {tasks.map((todo, index) => (
       <ToDoItem
       key={index}
       todo={todo}
       index={index}
       toggleComplete={toggleComplete}
       deleteTask={deleteTask}
     />
      ))}
    </ul>
    );
  };

  export default TaskList