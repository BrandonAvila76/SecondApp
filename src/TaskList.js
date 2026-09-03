import React from 'react';

function TaskList({ tasks, onToggleComplete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => onToggleComplete(index)}
        >
          {task.title} — {task.date}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
