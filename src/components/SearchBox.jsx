import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return (
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <input
                type="text"
                className="glass-input"
                placeholder="Search prompts..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ width: '100%', background: 'rgba(0,0,0,0.4)' }}
            />
        </div>
    );
};
export default SearchBox;
