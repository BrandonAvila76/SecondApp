import React from 'react';
import './CompletionBar.css';

function CompletionBar({ completed, total }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="completion-bar-container">
      <div className="completion-bar-fill" style={{ width: `${percentage}%` }}></div>
      <span className="completion-bar-label">{percentage}% Complete</span>
    </div>
  );
}

export default CompletionBar;
