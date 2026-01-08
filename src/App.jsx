import React, { useState } from 'react';
import AuthScreen from './components/AuthScreen';
import Layout from './components/Layout';
import PromptCard from './components/PromptCard';
import { contentData } from './data/content';
import './styles/main.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState(contentData.length > 0 ? contentData[0].id : null);

  const [searchQuery, setSearchQuery] = useState('');

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticated={handleAuthenticated} />;
  }

  // Search Logic
  let displayChapter = null;
  let searchResults = [];

  if (searchQuery.trim()) {
    const lowerQuery = searchQuery.toLowerCase();
    contentData.forEach(chapter => {
      chapter.sections.forEach(section => {
        if (
          (section.title && section.title.toLowerCase().includes(lowerQuery)) ||
          (section.content && section.content.toLowerCase().includes(lowerQuery))
        ) {
          searchResults.push({
            ...section,
            // Add chapter title to section title for context if needed, or just display
            context: chapter.title
          });
        }
      });
    });

    displayChapter = {
      id: 'search-results',
      title: `Search Results: "${searchQuery}"`,
      sections: searchResults
    };
  } else {
    displayChapter = contentData.find(c => c.id === activeChapterId) || contentData[0];
  }

  return (
    <Layout
      chapters={contentData}
      activeChapterId={activeChapterId}
      onSelectChapter={(id) => {
        setActiveChapterId(id);
        setSearchQuery(''); // Clear search on chapter select
      }}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      <div className="chapter-header" style={{ marginBottom: '3rem', textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
        <h1 style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          textShadow: '0 0 30px rgba(255,255,255,0.1)'
        }}>
          {displayChapter ? displayChapter.title : 'Welcome'}
        </h1>
        {displayChapter && displayChapter.sections.length > 0 && (
          <p style={{ color: 'var(--text-secondary)' }}>
            {displayChapter.sections.length} Result{displayChapter.sections.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="chapter-content">
        {displayChapter && displayChapter.sections.map((section, idx) => (
          <PromptCard key={idx} section={section} />
        ))}

        {(!displayChapter || displayChapter.sections.length === 0) && (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <p>No matches found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
