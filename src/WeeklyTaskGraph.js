import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function getWeeklyCompletedCounts(tasks) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const counts = days.map(day => ({ day, completed: 0 }));

  tasks
    .filter(t => t.completed && t.completedAt)
    .forEach(t => {
      const dayIndex = new Date(t.completedAt).getDay();
      counts[dayIndex].completed += 1;
    });

  return counts;
}

export default function WeeklyTaskGraph({ tasks }) {
  const data = getWeeklyCompletedCounts(tasks);

  return (
    <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
      <h2>Tasks Completed This Week</h2>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="completed" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}