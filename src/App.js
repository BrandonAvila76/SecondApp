import React, { useState } from 'react';
import './App.css';
import CompletionBar from './CompletionBar';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import WeeklyTaskGraph from './WeeklyTaskGraph';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updatedTasks[index].completedAt = updatedTasks[index].completed
      ? new Date().toISOString()
      : null;
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <CompletionBar completed={completedCount} total={tasks.length} />
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
      <WeeklyTaskGraph tasks={tasks} />
    </div>
  );
}

export default App;
