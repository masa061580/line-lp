import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';

const PromptCard = ({ section }) => {
    return (
        <div className="glass-card prompt-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h3 id={section.title ? section.title.replace(/\s+/g, '-').toLowerCase() : ''} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--text-accent)' }}>
                {section.title}
            </h3>
            <div className="card-content">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline ? (
                                <CodeBlock className={className} {...props}>
                                    {children}
                                </CodeBlock>
                            ) : (
                                <code className={className} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', color: 'var(--text-accent)' }} {...props}>
                                    {children}
                                </code>
                            )
                        },
                        img: ({ node, ...props }) => (
                            <img {...props} style={{ maxWidth: '100%', borderRadius: '8px', margin: '1rem 0', border: '1px solid var(--glass-border)' }} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote {...props} style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', margin: '1rem 0', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0 8px 8px 0' }} />
                        ),
                        a: ({ node, ...props }) => (
                            <a {...props} style={{ color: 'var(--text-accent)', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" />
                        )
                    }}
                >
                    {section.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default PromptCard;
