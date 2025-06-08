import React from 'react';
import './index.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
