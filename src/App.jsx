import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PromptCard from './components/PromptCard';
import AuthScreen from './components/AuthScreen';
import WelcomeScreen from './components/WelcomeScreen';
import { contentData } from './data/content';
import './styles/main.css';
import './styles/theme.css';
import './styles/glass.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // activeChapterId is null means "Home / Welcome Screen"
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-login during dev if needed, or check local storage
  // For now, keep it simple.

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticated={handleAuthenticated} />;
  }

  // Search Logic
  let displayContent;

  if (searchQuery.trim()) {
    // Search mode
    const query = searchQuery.toLowerCase();
    const results = [];

    contentData.forEach(chapter => {
      chapter.sections.forEach(section => {
        if (
          section.title.toLowerCase().includes(query) ||
          section.content.toLowerCase().includes(query)
        ) {
          results.push({ ...section, chapterTitle: chapter.title });
        }
      });
    });

    displayContent = (
      <div className="search-results fadeIn">
        <h2 style={{ marginBottom: '2rem' }}>Search Results for "{searchQuery}"</h2>
        {results.length > 0 ? (
          results.map((section, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                {section.chapterTitle}
              </div>
              <PromptCard section={section} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );

  } else if (activeChapterId === null) {
    // Home / Welcome Screen
    displayContent = <WelcomeScreen onStart={() => setActiveChapterId(contentData[0].id)} />;
  } else {
    // Chapter View
    const chapter = contentData.find(c => c.id === activeChapterId);
    if (!chapter) return <div>Chapter not found</div>;

    displayContent = (
      <div className="fadeIn" key={chapter.id}>
        <div className="chapter-header" style={{ marginBottom: '3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {chapter.title}
          </h1>
        </div>
        <div className="chapter-content">
          {chapter.sections.map((section, idx) => (
            <PromptCard key={idx} section={section} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Layout
      chapters={contentData}
      activeChapterId={activeChapterId}
      onSelectChapter={setActiveChapterId}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onHomeClick={() => setActiveChapterId(null)} // New prop for Layout
    >
      {displayContent}
    </Layout>
  );
}

export default App;
