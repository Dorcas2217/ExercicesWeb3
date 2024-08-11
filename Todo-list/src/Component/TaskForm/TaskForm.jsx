import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [newText, setNewText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const task = {
        text: newText,
        isCompleted: false,
      }
      addTask(task);
      
      setNewText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
    );
  };

  export default TaskForm;