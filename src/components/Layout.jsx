
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBox from './SearchBox';

const Layout = ({ chapters, children, activeChapterId, onSelectChapter, searchQuery, onSearchChange }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="layout" style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>

            {/* Mobile Menu Button */}
            <button
                className="glass-button mobile-menu-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 100,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex', // Hidden on desktop via CSS usually, but here inline
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--primary-color)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}
            >
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            {/* Sidebar */}
            <aside
                className={`sidebar ${isSidebarOpen ? 'open' : ''} `}
                style={{
                    width: '280px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRight: '1px solid var(--glass-border)',
                    padding: '2rem 1rem',
                    overflowY: 'auto',
                    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(0)', // Handle mobile in CSS or JS
                    zIndex: 90,
                    transition: 'transform 0.3s ease'
                }}
            >
                <div className="sidebar-header" style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        AI Prompts
                    </h2>
                    <SearchBox value={searchQuery} onChange={onSearchChange} />
                </div>
                <Sidebar
                    chapters={chapters}
                    activeChapterId={activeChapterId}
                    onSelect={(id) => {
                        onSelectChapter(id);
                        setIsSidebarOpen(false);
                    }}
                />
            </aside>

            {/* Main Content */}
            <main
                className="main-content"
                style={{
                    flex: 1,
                    marginLeft: '280px', // Matches sidebar width
                    padding: '2rem',
                    maxWidth: '1200px',
                    width: '100%'
                }}
            >
                {children}
            </main>

            {/* Responsive Styles Injection */}
            <style>{`
        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%) !important;
            }
            .sidebar.open {
                transform: translateX(0) !important;
            }
            .main-content {
                margin-left: 0 !important;
                padding-bottom: 80px !important; /* Space for fab */
            }
            .mobile-menu-btn {
                display: flex !important;
            }
        }
        @media (min-width: 769px) {
            .mobile-menu-btn {
                display: none !important;
            }
        }
      `}</style>
        </div>
    );
};

export default Layout;
