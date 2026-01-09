import React from 'react';

const Sidebar = ({ chapters, activeChapterId, onSelect }) => {
    return (
        <nav className="sidebar-nav">
            <ul style={{ listStyle: 'none' }}>
                {chapters.map((chapter) => (
                    <li key={chapter.id} style={{ marginBottom: '1.5rem' }}>
                        <button
                            onClick={() => onSelect(chapter.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: activeChapterId === chapter.id ? 'var(--text-accent)' : 'var(--text-primary)',
                                fontWeight: activeChapterId === chapter.id ? '600' : '400',
                                textAlign: 'left',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                width: '100%',
                                fontSize: '1rem',
                                display: 'block',
                                transition: 'color 0.2s',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                opacity: activeChapterId === chapter.id ? 1 : 0.8
                            }}
                        >
                            {chapter.title}
                        </button>

                        {/* Optional: Show sections if active */}
                        {activeChapterId === chapter.id && (
                            <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem', borderLeft: '1px solid var(--glass-border)' }}>
                                {chapter.sections.map((section, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                        <a href={`#${section.title ? section.title.replace(/\s+/g, '-').toLowerCase() : ''}`}
                                            style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
