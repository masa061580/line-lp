import React, { useState } from 'react';
import AuthScreen from './components/AuthScreen';
import './styles/main.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="app-container">
      {/* Sidebar and Main Content will go here */}
      <div className="glass-card" style={{ margin: '2rem', padding: '2rem' }}>
        <h1>Welcome to the Prompt Collection</h1>
        <p>You have successfully unlocked the content.</p>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Content loading is next...
        </p>
      </div>
    </div>
  );
}

export default App;
