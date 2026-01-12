import React, { useState } from 'react';

const AuthScreen = ({ onAuthenticated }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Simple hardcoded password - meant to be changed by user
    // In a real app, this should at least be an env var or hash
    const CORRECT_PASSWORD = 'Kx7mR4pL';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            onAuthenticated();
        } else {
            setError(true);
            setPassword('');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <div className="glass-card" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Access Required</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    Please enter the access code to view the prompt collection.
                </p>

                <form onSubmit={handleSubmit} autoComplete="on">
                    {/* Hidden username field for password manager support */}
                    <input
                        type="text"
                        name="username"
                        autoComplete="username"
                        value="prompt-collection-user"
                        readOnly
                        style={{ display: 'none' }}
                        aria-hidden="true"
                    />
                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        className="glass-input"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(false);
                        }}
                        placeholder="Enter password"
                        style={{ width: '100%', marginBottom: '1rem' }}
                        autoFocus
                    />

                    {error && (
                        <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Incorrect password. Please try again.
                        </p>
                    )}

                    <button type="submit" className="glass-button" style={{ width: '100%' }}>
                        Unlock
                    </button>
                </form>
            </div>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                Generative AI Prompt Collection
            </p>
        </div>
    );
};

export default AuthScreen;
