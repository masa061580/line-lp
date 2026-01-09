import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PromptCollectionApp from './components/PromptCollectionApp';
import './styles/main.css';
import './styles/theme.css';
import './styles/glass.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page at root */}
        <Route path="/" element={<LandingPage />} />

        {/* Secret Prompt Collection App */}
        <Route path="/x9dm20zk5p" element={<PromptCollectionApp />} />

        {/* Fallback pattern: Redirect unknown routes to Landing Page (or 404) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
