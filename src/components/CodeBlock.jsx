import React, { useState } from 'react';

const CodeBlock = ({ children, className }) => {
    const [copied, setCopied] = useState(false);
    // ReactMarkdown passes the code as children typically
    const code = String(children).replace(/\n$/, '');

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block-wrapper" style={{ position: 'relative', margin: '1rem 0' }}>
            <button
                className="glass-button"
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                    zIndex: 10,
                    background: copied ? 'var(--success-color)' : undefined,
                    borderColor: copied ? 'var(--success-color)' : undefined
                }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '1.5rem',
                borderRadius: '8px',
                overflowX: 'auto',
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--glass-border)'
            }}>
                <code className={className}>
                    {children}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
