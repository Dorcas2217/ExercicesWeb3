import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const newTodos = [...tasks];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    addTask(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={handleDelete} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;