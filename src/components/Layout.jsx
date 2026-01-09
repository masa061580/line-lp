import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SearchBox from './SearchBox';
import Footer from './Footer';

const Layout = ({ chapters, children, activeChapterId, onSelectChapter, searchQuery, onSearchChange, onHomeClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="layout" style={{ display: 'flex', minHeight: '100vh', position: 'relative', flexDirection: 'column' }}>
            {/* Wrap main content area so footer pushes down */}
            <div style={{ display: 'flex', flex: 1 }}>

                {/* Mobile Menu Button - Pill Style */}
                <button
                    className="glass-button mobile-menu-btn"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 100,
                        borderRadius: '50px',
                        padding: '0.875rem 1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--primary-color)',
                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <span style={{ fontSize: '1.1rem' }}>{isSidebarOpen ? '✕' : '☰'}</span>
                    <span>{isSidebarOpen ? '閉じる' : 'メニュー'}</span>
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
                        zIndex: 90,
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <div className="sidebar-header" style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <h2
                            onClick={onHomeClick}
                            style={{
                                fontSize: '1.2rem',
                                marginBottom: '1rem',
                                background: 'linear-gradient(to right, #fff, #94a3b8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                lineHeight: '1.4',
                                cursor: 'pointer'
                            }}
                        >
                            医療者のための<br />厳選プロンプト集
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
                        marginLeft: '280px',
                        padding: '2rem',
                        maxWidth: '1200px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {children}

                    {/* Footer inserted here inside main or after? 
                    If we want it specifically at the bottom of the main content flow, putting it here is good.
                */}
                    <Footer simple={activeChapterId === null} />
                </main>

            </div> {/* End flex wrapper */}

            {/* Responsive Styles Injection */}
            <style>{`
@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-100%);
    }
    .sidebar.open {
        transform: translateX(0);
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
