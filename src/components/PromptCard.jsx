import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';

const CalloutBlock = ({ children, ...props }) => {
    // Extract text content to check for callout pattern
    let content = children;
    let type = "note"; // default
    let title = "Note";
    let isCallout = false;

    // Helper to deep check for string content if nested in paragraphs
    const getFirstLine = (nodes) => {
        if (!nodes) return "";
        if (typeof nodes === 'string') return nodes;
        if (Array.isArray(nodes)) {
            for (let node of nodes) {
                let res = getFirstLine(node);
                if (res) return res;
            }
        }
        if (nodes.props && nodes.props.children) {
            return getFirstLine(nodes.props.children);
        }
        return "";
    };

    const traverseAndClean = (nodes) => {
        if (!nodes) return null;
        if (typeof nodes === 'string') {
            const match = nodes.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|DANGER|TIPS)\]/i);
            if (match) {
                type = match[1].toLowerCase();
                title = type.toUpperCase();
                isCallout = true;
                return nodes.replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|DANGER|TIPS)\]/i, '').trim();
            }
            return nodes;
        }

        if (Array.isArray(nodes)) {
            return nodes.map((n, i) => traverseAndClean(n));
        }

        if (React.isValidElement(nodes)) {
            // If it's a paragraph (p tag), checking inside it
            if (nodes.type === 'p' || nodes.type === 'div') {
                const newChildren = traverseAndClean(nodes.props.children);
                return React.cloneElement(nodes, { ...nodes.props, children: newChildren });
            }
            return nodes;
        }
        return nodes;
    };

    const processedChildren = traverseAndClean(children);

    if (!isCallout) {
        // Normal blockquote
        return (
            <blockquote {...props} style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', margin: '1rem 0', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                {children}
            </blockquote>
        );
    }

    // Define styles based on type
    const styles = {
        note: { color: '#60a5fa', border: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
        tips: { color: '#34d399', border: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
        tip: { color: '#34d399', border: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
        important: { color: '#a78bfa', border: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
        warning: { color: '#fbbf24', border: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
        caution: { color: '#f87171', border: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
        danger: { color: '#f87171', border: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
    };

    const style = styles[type] || styles.note;

    return (
        <div style={{
            borderLeft: `4px solid ${style.border} `,
            background: style.bg,
            padding: '1rem',
            borderRadius: '0 8px 8px 0',
            margin: '1.5rem 0',
            color: 'var(--text-primary)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: style.color, fontWeight: 'bold' }}>
                <span style={{ marginRight: '0.5rem' }}>
                    {type === 'note' && 'ℹ️'}
                    {(type === 'tip' || type === 'tips') && '💡'}
                    {type === 'important' && '📢'}
                    {type === 'warning' && '⚠️'}
                    {(type === 'caution' || type === 'danger') && '🚨'}
                </span>
                {title}
            </div>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                {processedChildren}
            </div>
        </div>
    );
};

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
                        blockquote: CalloutBlock,
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
