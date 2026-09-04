import React from 'react';

export default function CompletedHistory({ tasks }) {
  const completed = tasks.filter(t => t.completed);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Completed History</h2>
      {completed.length === 0 ? (
        <p>Nothing completed yet.</p>
      ) : (
        <ul>
          {completed.map((t, index) => (
            <li key={index}>
              {t.text} — completed {t.completedAt ? new Date(t.completedAt).toLocaleDateString() : 'recently'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}