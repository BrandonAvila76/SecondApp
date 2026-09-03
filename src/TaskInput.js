import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === '') return;

    const newTask = {
      title: taskTitle,
      date: new Date().toLocaleDateString(),
      completed: false,
    };

    onAddTask(newTask);
    setTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
