import React from 'react';
import './App.css';
import CompletionBar from './CompletionBar';

function App() {
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <CompletionBar completed={3} total={10} />
    </div>
  );
}

export default App;
